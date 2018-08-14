const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const ejs = require('ejs');

//routes
const routes = require('./routes/routes');
const google = require('./routes/googleAPI');


//node port
const port = process.env.port || 5000;
// set the view engine to ejs
app.set('view engine', 'ejs');
//Static files
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())





//Use Routes
app.use(routes);
app.use('/api', google)


app.listen(port, () => console.log('Server started on port '+ port));
