const axios = require('axios');


const requestRestaurants = function(foodType, latitude, longitude, radius, cb) {
  const searchURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${foodType}+Restaurant&sensor=true&location=${latitude},${longitude}&radius=${radius}&key=${process.env.GOOGLE_API_KEY}`;

  axios({
    method: 'get',
    url: searchURL,
    responseType: 'json'
  })
    .then(cb)
    .catch(cb);

}

module.exports.requestRestaurants = requestRestaurants;