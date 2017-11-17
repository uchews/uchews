const axios = require('axios');
const Nodegeocoder = require('node-geocoder');


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

const handleQueries = function(body, cb) {
  //
  let geocoder = Nodegeocoder({
    provider: 'google',
    apiKey: process.env.GOOGLE_API_KEY
  });
  geocoder.geocode(req.body.location, (err, locationObject) => {

  });

}


module.exports.requestRestaurants = requestRestaurants;
module.exports.handleQueries = handleQueries;



// req.body: {
//   location: '123 Fake St',
//   budget: 2,
//   radius: 500,
//   wantToEat: ['chinese', 'sushi', 'italian'],
//   willNotEat: ['italian', 'bar']
// }
// Querying the API:
//   use geocoder to translate the address into latitude and longitude
//   send a get request to google places for THE TOP 3 keys in the search object
//   add the associated search object value to each returned restaurant object
//   add a cuisine property to each restaurant object