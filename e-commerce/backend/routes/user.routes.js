import { userRegisterCtrl } from "../controllers/user.controller.js";
import express from "express";
const router = express.Router();

router.post("/register", userRegisterCtrl);

export default router;
