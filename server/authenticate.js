const bcrypt = require('bcrypt');
const db = require('../database/index.js');


const checkUserExist = (user, cb) => {
  db.User.findOne({ username: user.username }, (err, user) => {
    if (user) {
      cb(false);
    } else {
      cb(true);
    }
  });
}

const storeNewUser = (user, cb) => {
  bcrypt.genSalt(5, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      const newUser = {
        username: user.username,
        password: hash
      };
      db.saveNewUser(newUser, cb);
    });
  });


}

module.exports.checkUserExist = checkUserExist;
module.exports.storeNewUser = storeNewUser;
