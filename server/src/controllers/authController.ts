import { Request, Response } from "express";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

type User = {
  email: string;
  password: string;
};

let users: User[] = [];

const saltRounds = 10;

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if user already exists
  if (users.find((user) => user.email === email)) {
    return res
      .status(400)
      .json({ message: "Account already exists. Sign in instead?" });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Add user
    users.push({ email, password: hashedPassword });

    // Generate token
    const token = jwt.sign({ email }, process.env.JWT_SECRET || "secret", {
      expiresIn: "1h",
    });

    res.status(201).json({ token });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "An error occurred during signup" });
  }
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password." });
    }

    // Compare passwords
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Incorrect email or password." });
    }

    // Generate a token
    const token = jwt.sign({ email }, process.env.JWT_SECRET || "secret", {
      expiresIn: "1h",
    });
    return res.status(200).json({ token });
  } catch (error) {
    console.error("Error in signin:", error);
    res.status(500).json({ message: "An error occurred during signin" });
  }
};

export const signout = async (req: Request, res: Response) => {
  // In a stateless JWT setup, we don't need to do anything server-side
  // The client will remove the token
  res.status(200).json({ message: "Successfully signed out" });
};

// For debugging purposes
export const getUsers = (req: Request, res: Response) => {
  res.json(
    users.map((user) => ({ email: user.email, passwordHash: user.password }))
  );
};
