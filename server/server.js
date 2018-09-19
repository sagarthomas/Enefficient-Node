require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

// body-parser extracts the body of the incoming request and allows acess to it in req.body
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Enefficient-API');
});





app.listen(port, () => {
    console.log(`Started on port ${port}`);
});