import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';
import router from './routes/user.routes.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
dbConnect();
app.use('/api/v1/user', router);
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT, ()=>{
    console.log(`Server is Listening at http://localhost:${PORT}`)
})