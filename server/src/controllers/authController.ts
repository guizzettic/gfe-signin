import { Request, Response } from "express";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// this is a placeholder for database. In a real app, i'd use a proper database.
type User = {
  email: string;
  password: string;
};

let users: User[] = [];

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if user already exists
  if (users.find((user) => user.email === email)) {
    return res
      .status(400)
      .json({ message: "Account already exists. Sign in instead?" });
  }

  // Hash password
  const hashedPassword = await bcrypt.genSalt(10, (err: any, salt: any) => {
    bcrypt.hash(password, 10);
  });

  // Add password
  users.push({ email, password: hashedPassword });

  // Generate token
  const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });

  res.status(201).json({ token });
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).json({ messsage: "User does not exist" });
  }

  // Unhash user password
  const validPassword = bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: "Incorrect email or password." });
  }

  // Generate a token
  const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });
  return res.status(200).json({ token });
};

export const signout = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Successfully signed out." });
};
