const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://uchews:catdog@ds163745.mlab.com:63745/uchews', { mongoUseClient: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database');
});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: { type: String },
  ateAt: [String]
});

const User = mongoose.model('User', UserSchema);

const saveNewUser = (username, password, cb) => {
  return new User({
    username: username,
    password: password,
    ateAt: []
  }).save(cb);
}
