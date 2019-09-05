const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json({
    type: 'application/json'
}))
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! You have been registered succesfully`
    })
});

app.listen(8081);