import express from "express";
import { loginUserCtrl, registerUserCtrl } from "../controllers/userLogin.controller.js";
export const appRouter = express.Router();

appRouter.post('/register',registerUserCtrl);
appRouter.post('/login',loginUserCtrl);