import { createContext, useState } from "react";

interface AuthContextType {
  user: null | { email: string };
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<null | { email: string }>(null);

  const signIn = async (email: string, password: string) => {
    // implement sign in logic here
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    password;
    console.log("signing in");
    setUser({ email });
  };

  const signUp = async (email: string, password: string) => {
    // implement sign up logic here
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    password;
    setUser({ email });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
