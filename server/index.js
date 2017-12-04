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
var axios = require('axios');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');


//EVENTS API ATTEMPT
global.fetch = require('node-fetch')
var phq = require('predicthq')
var client = new phq.Client({access_token: "vcbZQQcuQvsXd2lwYDZyAfDxUbG6Sd"})
// var phq = new Client({access_token: "vcbZQQcuQvsXd2lwYDZyAfDxUbG6Sd"})

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
  store: new MongoStore({ url: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds123956.mlab.com:23956/uchewstwo`})
}));

app.use(passport.initialize());
//set up the route to Google for authentication
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']
}));
//set up the return handler after Google has authenticated
app.get('/auth/google/callback',
  passport.authenticate('google', {failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
});

app.post('/signup', (req, res) => {
  //make sure the user doesn't exist in database by doing find({username: username})
  authenticate.checkUserExist(req.body, (doesUserNotExist) => {
    if (doesUserNotExist) {
    //if the user doesn't exist, hash the password and store user and hash in db
      authenticate.storeNewUser(req.body, req.sessionID, (err) => {
        res.send(true);
      });
    } else {
      res.send(false);
    }
  });
});

app.post('/invitation', function(req, res) {
  // console.log('EMAIL---line 82 SERVER/INDEX.JS REQ = ', req.body)
  const msg = {
      to: req.body.guest,
      from: 'JediSchoolOfMasterDan@dan.com',
      subject: 'Jedi Mast Dan Kwon has summond you',
      text: 'Simply enter the group name: ' + 'HACKREACTOR',
    };
    sgMail.send(msg).then(function() {
      res.send('sent success');
      res.end();
    }
  )
})





app.post('/events', (function(req, res) {
  console.log('line 109 events get req.body =', req.body);

  var geoLat;
  var geoLong;
  //get coordinates from zip:
  axios.get('https://www.zipcodeapi.com/rest/yhQtTsIlD8YDqFFt3SLGO9SUFD7nPHjicMoj5LTedYejbvG5av6AXiCNwDcvuKuh/info.json/' + req.body.zip + '/degrees')
    .then(function(response){
      console.log('response.data', response.data);
      console.log('response.status', response.status);
      geoLat = response.data.lat;
      geoLong =response.data.lng;
      callEventsApi();
    });

  var callEventsApi = function() {
    client.events.search({q: 'Jazz', within: '30km@' + geoLat + ',' + geoLong})
      .then(function(results){
        var events = results.toArray()
        // for(var i=0; i < events.length; i++) {
        //     console.info(events[i].rank, events[i].category, events[i].title, events[i].start, events[i].location )
        //   }
          // console.log('EVENTS WAS SUCCESSFUL =', events)
      res.status(200).send(events)
      })
        // console.log('BENJI --------> line 11 sever/index.js', results)
  }
}));




//*New* get user's Prefs from db for preference.jsx
app.get('/prefs', (function(req, res) {
  console.log('Hellow from server/index.js line 79 USERNAME-------->', req.session.user );
  db.User.find({username: req.session.user }, function(error, something) {
    if (error) {
      console.log('Error userinfo Get server/index.js line 82', error);
    }
    console.log('BENJI --------> line 84 sever/index.js', something)
    res.status(200).send(something)
  });
}));

app.post('/update', (req, res) => {
  console.log('line 94 SERVER/INDEX.JS REQ = ', req.body)
  db.User.findOneAndUpdate({ username: req.session.user },
    {
      foodType: req.body.wantToEat,
      willNotEat: req.body.willNotEat,
      // username: 'dug' //TEMPORARY was  req.body.username but index.js of app was sending empty string.
    }, { upsert: true }, (err, user) => {
      res.send('success');
      res.end();
    }
  )
})

app.get('/group', (req, res) => {
  db.Group.find({}, function(err, groups) {
    res.send(groups);
    res.end();
  })
})

app.post('/group', (req, res) => {
  db.Group.findOneAndUpdate({ title: req.body.title },
    {$push: {members: req.body.members}, location: req.body.location }, { upsert: true, new: true }, (err, group) => {
      res.send(group);
      res.end();
    }
  )
})


// --------- We are currently using username1 but as soon as Mike implement session.user we will change it to req.session.user
app.get('/image', (req, res) => {
  console.log('THIS IS THE CURRENT SESSION USER', req.session.user);
  db.User.find({ username: req.session.user }, function(err, user) {
    if (err) throw err;
    console.log('THIS IS THE USER', user)
    res.send(user[0].imageUrl);
    res.end();
  })
})

app.post('/image', (req, res) => {
  const username = req.body.currentUser;
  const imageUrl = req.body.imageUrl;
  db.User.findOneAndUpdate({ username: username }, { imageUrl: imageUrl }, { new: true }, (err, updatedUser) => {
    if (err) throw err;
    console.log('SUCCESSFULLY SAVED IMAGEURL TO USER');
    res.send('success');
    res.end();
  })
})
// --------- We are currently using username1 but as soon as Mike implement session.user we will change it to req.session.user


app.post('/login', (req, res) => {
  const user = req.body;
  db.User.findOne({ username: req.body.username }, (err, user) => {
    if (!user) {
      res.send(false);
    } else {
      req.session.user = req.body.username;
      bcrypt.compare(req.body.password, user.password, (err2, result) => {
        if (result) {
          db.User.findOneAndUpdate({ username: req.body.username }, { sessionID: req.sessionID }, { new: true }, (err, updatedUser) => {
            res.send('hello world');
          });
        } else {
          res.send(result);
        }
      });
    }
  });
});

app.get('/logout', (req, res) => {
  console.log('request session', req.session);
  req.session.destroy((err) => {
    if (err) {
      console.log('error on logout: ', err);
    }
    res.send();
  });
});

app.set('port', (process.env.PORT || 1337));
const port = app.get('port');


app.use(express.static(__dirname + '/../client/dist'));

//The client sends a get request to /checkSession to determine whether the login or home view should be selected
app.get('/checkSession', (req, res) => {
  db.User.findOne({ sessionID: req.sessionID }, (err, user) => {
    if (user) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
});


//Client sends survey results to /input/findRestaurants for API querying and ranking
app.post('/input/findRestaurants', (req, res) => {
  db.User.find({username: req.session.user}, (err, user) => {
    if (err) {console.log('server post findRestaurants db err', err)};
    req.body.wantToEat.push(user[0].wantToEat);
    req.body.willNotEat.push(user[0].willNotEat);
    console.log('server post merge user prefs', req.body)
  } )
  google.handleQueries(req.body, (results) => {
    res.send(results);
  });
});


app.listen(port, () => {
  console.log(`Listening on ${port}`);
});