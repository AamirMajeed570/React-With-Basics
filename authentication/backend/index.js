import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import { dbConnect } from "./config/db.js";
import { appRouter } from "./routes/user.routes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json())
dbConnect().then(()=>{
    console.log("DB Connected Succesfully");
}).catch((err)=>{
    console.log("Some Error Ocurred While Connecting DB",err);
})
app.use('/api/v1', appRouter);
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
  });

app.listen(process.env.PORT,console.log(`Server is Listening at http://localhost:${process.env.PORT}`))