import express from 'express';
import cors from 'cors';
const PORT = 8000;
const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send('My First Route');
})

app.get('/api/v1/test',(req,res)=>{
    console.log(req);
    res.send('My Second Route');
})

app.post('/api/version/:versionname',(req,res)=>{
    const versionname = req.params.versionname;
    try {
        console.log("1111111111")
        console.log(`Version name is ${versionname}`);
        res.status(200).send({ data:versionname, success: true });
    } catch (error) {
        console.log("Error----", error);
    }
})

app.get('/api/v1.1.0/resource',(req,res)=>{
    res.json({version: 'v1.1.0', data: 'This is version 1.1.0 functionality'})
})

app.get('/api/v1.1.1/resource',(req,res)=>{
    res.json({version: 'v1.1.1', data: 'This is version 1.1.1 functionality'})
})

app.get('/api/v2.1.1/resource',(req,res)=>{
    res.json({version: 'v2.1.1', data: 'This is version 2.1.1 functionality'})
})

app.listen(PORT,console.log(`Server is Listening at http://localhost:${PORT}`));