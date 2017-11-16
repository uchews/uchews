const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('../database/index.js');

require('dotenv').config();

const app = express();
app.set('port', (process.env.PORT || 1337));
const port = app.get('port');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(__dirname + '/../public'));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
