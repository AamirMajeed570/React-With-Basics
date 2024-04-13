const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Received data successfully');
});

app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000');
});
