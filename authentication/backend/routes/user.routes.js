import express from "express";
import { loginUserCtrl, registerUserCtrl, userDetailsCtrl } from "../controllers/userLogin.controller.js";
export const appRouter = express.Router();

appRouter.post('/register',registerUserCtrl);
appRouter.post('/login',loginUserCtrl);
appRouter.get('/user',userDetailsCtrl);