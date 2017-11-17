const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('../database/index.js');
const google = require('./googlePlacesHelpers.js');

require('dotenv').config();


//Set up google login protocol
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.LOCAL_GOOGLE_REDIRECT || 'https://frozen-beach-49440.herokuapp.com/auth/google/callback'
  },
  //lookup or create a new user using the googleId (no associated username or password)
  function(accessToken, refreshToken, profile, done) {
    db.findOrCreateUser({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

const app = express();


//set up the route to Google for authentication
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
//set up the return handler after Google has authenticated
app.get('auth/google/callback',
  passport.authenticate('google', {failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });


app.set('port', (process.env.PORT || 1337));
const port = app.get('port');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(__dirname + '/../client/dist'));

//This must be changed to app.post to interact with the front-end
app.get('/input/findRestaurants', (req, res) => {
  google.handleQueries(req.body, (results) => {
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
