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

const storeNewUser = (user, sessionID, cb) => {
  console.log('sessionID in save: ', sessionID);
  bcrypt.genSalt(5, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      const newUser = {
        username: user.username,
        imageUrl: user.imageUrl || 'https://pbs.twimg.com/profile_images/839721704163155970/LI_TRk1z_400x400.jpg',
        password: hash,
        sessionID: sessionID
      };
      db.saveNewUser(newUser, cb);
    });
  });


}

module.exports.checkUserExist = checkUserExist;
module.exports.storeNewUser = storeNewUser;