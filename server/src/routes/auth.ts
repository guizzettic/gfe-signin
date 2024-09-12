import express from "express";
import { signup, signin, signout } from "../controllers/authController";
import { validateSignup, validateSignin } from "../middleware/validation";

const router = express.Router();

router.post("/signup", validateSignup, signup);
router.post("/signin", validateSignin, signin);
router.post("/signout", signout);

export default router;
