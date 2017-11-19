const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds163745.mlab.com:63745/uchews`, { mongoUseClient: true});



let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database');
});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  googleId: { type: String },
  ateAt: [String]
});

const User = mongoose.model('User', UserSchema);

const saveNewUser = (user, cb) => {
  let newUser = new User({
    username: user.username || user.googleId,
    password: user.password,
    googleId: user.googleId,
    ateAt: []
  });
  newUser.save(cb);
}

const findOrCreateUser = (query, cb) => {
  User.findOne(query, (err, user) => {
    if (!user) {
      saveNewUser(query, (err2) => {
        if (err2) {
          console.log('error saving user: ', err2);
        } else {
          User.findOne(query, (err, user) => {
            cb(err, user);
          });
        }
      });
    } else {
      cb(err, user);
    }
  });
}

module.exports.findOrCreateUser = findOrCreateUser;
module.exports.User = User;
module.exports.saveNewUser = saveNewUser;