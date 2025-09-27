import { Request,Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from "../schema/user.schema";
import dotenv from 'dotenv';
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET!;
interface AuthenticatedUser{
    name?: string,
    email: string,
    password: string,
    user_id?: string
}
export const registerUser = async (req:Request, res:Response):Promise<void> => {
    const {name,email,password} = req.body;
    const getUsers = await User.find();
    console.log(getUsers)
    const existingUser = await User.findOne({email})
    if(existingUser){
        res.status(401).json({
            message: "User already Exists"
        })
        return;
    }
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password,salt)
    const newUser = new User({
        name,
        email,
        password: hashed,
    })
    await newUser.save();
    const token = jwt.sign({id: newUser._id},JWT_SECRET,{expiresIn: "2h"})

    res.status(200).send({
        message: "User Registered Succesfully",
        token,
        user:{
            id: newUser._id,
            name: newUser.name,
            email: newUser.email
        }
    })
    return;
}

export const loginSuccess = async (req:Request, res:Response):Promise<void> => {
    const {email,password} = req.body;
    const user = await User.findOne({
        email
    })
    if(!user){
        res.status(401).json({
            message: "User does not exist"
        })
        return;
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        res.status(401).json({
            message: "Invalid Credentials"
        })
        return;
    }
    const token = jwt.sign({id: user._id},JWT_SECRET,{expiresIn: "2h"})
    res.status(200).json({
        message: "User Logged In Successfully",
        token,
        user:{
            id: user._id,
            name: user.name,
            email: user.email
        }
    })
    return;
}