import { Request, Response, NextFunction } from "express";

const {
  required,
  isEmail,
  minLength,
  hasUpperCase,
  hasLowerCase,
  hasSpecialChar,
  hasNumber,
  maxLength,
} = require("../utils/validation");

export const validateSignup = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  const emailError = required(email) || isEmail(email);
  if (emailError) {
    return res.status(400).json({ message: emailError });
  }

  const passwordErrors = [
    required,
    minLength(8),
    maxLength(64),
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasSpecialChar,
  ]
    .map((rule) => rule(password))
    .filter((error) => error != undefined);

  if (passwordErrors.length > 0) {
    return res.status(400).json({ message: passwordErrors[0] });
  }

  next();
};

export const validateSignin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  const emailError = required(email) || isEmail(email);
  if (emailError) {
    return res.status(400).json({ message: emailError });
  }

  const passwordErrors = required(password);
  if (passwordErrors) {
    res.status(400).json({ message: passwordErrors[0] });
  }

  next();
};
