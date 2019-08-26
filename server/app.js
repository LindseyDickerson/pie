require('dotenv').config();
const express = require('express'); //express package module that is was imported
const app = express(); //creating the express application
const pies = require('./controllers/piecontroller');

// app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

// app.get('/', (req, res) => res.render('index')); commented out  above 3 lines as not typically needed. 

app.use('/pies', pies);

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`)); //running server on port 3000 and letting us know app is listening
