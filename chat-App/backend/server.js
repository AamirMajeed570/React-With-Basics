import express from 'express';
import chats from './data/data.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000
app.get('/',(req,res)=>{
    res.send('API is running')
});
console.log(process.env.LOG);
app.get('/api/chats',(req,res)=>{
    console.log('Hello');
    res.send(chats);
})



app.listen(PORT,console.log(`Server is Listening at http://localhost:${PORT}`))