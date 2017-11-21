const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const MongoStore = require('connect-mongo')(session);
const bcrypt = require('bcrypt');
const db = require('../database/index.js');
const google = require('./googlePlacesHelpers.js');
const authenticate = require('./authenticate.js');
const handleRestaurants = require('./handleRestaurants.js');

require('dotenv').config();

//Set up google login protocol
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.LOCAL_GOOGLE_REDIRECT || 'https://frozen-beach-49440.herokuapp.com/auth/google/callback',
  passReqToCallback: true
  },
  //lookup or create a new user using the googleId (no associated username or password)
  function(req, accessToken, refreshToken, profile, done) {
    db.findOrCreateUser({ googleId: profile.id, sessionID: req.sessionID }, function (err, user) {
      console.log('user in google strategy ', user);

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
  saveUninitialized: true,
  store: new MongoStore({ url: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds163745.mlab.com:63745/uchews`})
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
    console.log('Google sessionID: ', req.sessionID);
    res.redirect('/');
});

app.post('/signup', (req, res) => {
  //make sure the user doesn't exist in database by doing find({username: username})
  authenticate.checkUserExist(req.body, (doesUserNotExist) => {
    if (doesUserNotExist) {
    //if the user doesn't exist, hash the password and store user and hash in db and send true to client
      authenticate.storeNewUser(req.body, req.sessionID, (err) => {
        console.log('error in storeNewUser, server index line 68: ', err);
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
  db.User.findOne({ username: req.body.username }, (err, user) => {
    if (!user) {
      res.send(false);
    } else {
      bcrypt.compare(req.body.password, user.password, (err2, result) => {
        if (result) {
          db.User.findOneAndUpdate({ username: req.body.username }, { sessionID: req.sessionID }, { new: true }, (err, updatedUser) => {
            res.send(result);
          });
        } else {
          res.send(result);
        }
      });
    }
  });
});


//needs to be rewritten to reflect actual login page
app.get('/login', function(req, res) {

  //req.logout();
  res.send('google authentication failed');

});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log('error on logout: ', err);
    }
    console.log('sending logout to client');
    res.send();
  });
});

app.set('port', (process.env.PORT || 1337));
const port = app.get('port');


app.use(express.static(__dirname + '/../client/dist'));

app.get('/checkSession', (req, res) => {
  console.log('sessionID in /checkSession: ', req.sessionID);
  console.log('session object in /checkSession: ', req.session);
  db.User.findOne({ sessionID: req.sessionID }, (err, user) => {
    if (user) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
});


app.post('/input/findRestaurants', (req, res) => {
  google.handleQueries(req.body, (results) => {
    res.send(results);
  });
});


app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
