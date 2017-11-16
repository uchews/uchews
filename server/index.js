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

//This must be changed to app.post to interact with the front-end
app.get('/input/findRestaurants', (req, res) => {
  google.handleQueries(req.body, (results) => {
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
