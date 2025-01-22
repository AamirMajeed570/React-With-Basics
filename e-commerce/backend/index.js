import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
console.log(dotenv)
dbConnect();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(3000, ()=>{
    console.log(`Server is Listening at http:localhost:${PORT}`)
})