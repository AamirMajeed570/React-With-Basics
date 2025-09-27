import express,{Request,Response} from 'express';
import { connectDb } from './config/db';
import authRoutes from "./routes/auth.routes";
const app = express();
app.use(express.json())

app.use("/api/auth", authRoutes);
connectDb();
app.get("/",(req:Request,res:Response)=>{
    res.send("Hello express + TypeScirpt")
})

export default app;