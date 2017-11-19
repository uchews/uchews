const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('../database/index.js');
const google = require('./googlePlacesHelpers.js');
const authenticate = require('./authenticate.js');

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
passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(_id, done) {
  db.User.findById(_id, function(err, user) {
    done(err, user);
  });
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
//set up the route to Google for authentication
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']
}));
//set up the return handler after Google has authenticated
app.get('/auth/google/callback',
  passport.authenticate('google', {failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
});

app.post('/signup', (req, res) => {
  //make sure the user doesn't exist in database by doing find({username: username})
  console.log('user: ', req.body);
  authenticate.checkUserExist(req.body, (doesUserNotExist) => {
    if (doesUserNotExist) {
    //if the user doesn't exist, hash the password and store user and hash in db and send true to client
      authenticate.storeNewUser(req.body, () => {
        console.log('new user created');
        res.send(true);
      });
    } else {
      res.send(false);
    }
  });
});

app.post('/login', (req, res) => {
  const user = req.body;
  //try to retrieve the user from db
  //if user exists, check password against hash using bcrypt.compare
  //return true if user exists and bcrypt returns true
});

//needs to be rewritten to reflect actual login page
app.get('/login', function(req, res) {
  //req.logout();
  res.send('google authentication failed');
});

app.set('port', (process.env.PORT || 1337));
const port = app.get('port');


app.use(express.static(__dirname + '/../client/dist'));

app.get('/checkSession', (req, res) => {
  console.log('session object: ', req.sessionID);
  res.send('hello there')
})

app.post('/input/findRestaurants', (req, res) => {
  google.handleQueries(req.body, (results) => {
    res.send(results);
  });
});


app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
