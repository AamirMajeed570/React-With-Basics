require('dotenv').config();
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const PORT = process.env.PORT || 5000
const app = express()
const apiLimiter = rateLimit({
    windowMs : 15 * 60 * 1000 ,//15 Minutes
    max:100,
})
// Cors Option
const corsOption = {
    origin:['http://localhost:5173']
}
const API_URL = "https://v6.exchangerate-api.com/v6/"
const API_KEY = process.env.EXCHANGE_RATE_API_KEY
// Middleware
app.use(express.json()) //Pass incoming JSON Data
app.use(apiLimiter)
app.use(cors(corsOption))
// Conversion
app.post('/api/convert', async(req,res)=>{
    try {
        // Get The user Data
        const {from,to,amount} = req.body;
        console.log({from,to,amount});
        // const url = `${API_URL}/${API_KEY}/pair/${from}/${to}/${amount}`
        const url = `${API_URL}/${API_KEY}/pair/${from}/${to}/${amount}`;
        const response = await axios.get(url)
        if(response.data && response.data.result === 'success'){
            res.json({
                base:from,
                target:to,
                conversionRate:response.data.conversion_rate,
                convertedAmount:response.data.conversion_result,
            });
        }
        else{
            res.json({message:"Error Converting Currency",details:response.data})
        }
        
        // console.log(response);
        // console.log(url)
    } catch (error) {
        res.json({message:"Error Converting Currency",details:error.message})
    }
})

// Start The Server
app.listen(PORT ,console.log(`Server is listening at http://localhost:${PORT}`))
