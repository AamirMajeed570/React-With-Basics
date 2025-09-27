import express from "express";
import * as authController from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginSuccess);
export default router;