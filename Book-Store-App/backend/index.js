import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './dbConnect/dbConnect.js'
import cors from 'cors';
import bookRouter from './routes/bookRoutes.js'
dotenv.config()
const app = express()
dbConnect()
app.use(express.json())
app.use(cors());
app.get('/',(req,res)=>{
  res.status(200).send("welcome")
})
// Custom Origins Only the Clients with this Localhost
// app.use(
//   cors({
//       origin:'http://localhost:3000',
//       methods:['GET','POST','PUT','UPDATE','DELETE'],
//       allowedHeaders:['Content-Type']
//   })
// )

// Middleware 
app.use('/books',bookRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is Listening at http://localhost:${process.env.PORT}`)
})
