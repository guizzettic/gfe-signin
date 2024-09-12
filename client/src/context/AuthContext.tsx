import React, { createContext, useState, useEffect } from "react";
import {
  signIn as apiSignIn,
  signUp as apiSignUp,
  signOut as apiSignOut,
} from "../api";
import { jwtDecode } from "jwt-decode"; // You'll need to install this package: npm install jwt-decode

interface User {
  email: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string }>;
  signUp: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<{ success: boolean; error?: string }>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const isTokenValid = (token: string) => {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken && decodedToken.exp && decodedToken.exp > currentTime;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (isTokenValid(parsedUser.token)) {
        setUser(parsedUser);
      } else {
        localStorage.removeItem("user");
      }
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { token } = await apiSignIn(email, password);
      // TODO: is there a better way to handle checking for validToken? maybe on the server?
      if (isTokenValid(token)) {
        const newUser = { email, token };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        return { success: true };
      } else {
        throw new Error("Session timed out, please login again.");
      }
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { token } = await apiSignUp(email, password);
      if (isTokenValid(token)) {
        const newUser = { email, token };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        return { success: true };
      } else {
        throw new Error("Session timed out, please login again.");
      }
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  };

  const signOut = async () => {
    try {
      if (user) {
        await apiSignOut(user.token);
      }

      setUser(null);
      localStorage.removeItem("user");
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
