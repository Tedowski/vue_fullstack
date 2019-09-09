const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');

const app = express();

app.use(morgan('combined'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json({
    type: 'application/json'
}))
app.use(cors());

require('./routes')(app)

sequelize.sync()
    .then(() => {

        app.listen(config.port);
        console.log(`Server started on port ${config.port}`)
    })