const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('../database/index.js');
const google = require('./googlePlacesHelpers.js');

require('dotenv').config();

const app = express();
app.set('port', (process.env.PORT || 1337));
const port = app.get('port');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(__dirname + '/../public'));

app.get('/findRestaurants', (req, res) => {
  google.handleQueries(req.body, (results) => {

  });
  google.requestRestaurants('Indian', 40.712775, -74.005973, 500, (data) => {
    console.log('results===================', data.data.results);
    res.send();
  });
})

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});


req.body: {
  budget: 2,
  radius: 500,
  wantToEat: ['chinese', 'sushi', 'italian'],
  willNotEat: ['italian', 'bar']
}

