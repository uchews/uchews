const axios = require('axios');
const Nodegeocoder = require('node-geocoder');



const requestRestaurants = function(cuisine, latitude, longitude, radius) {
  const searchURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${cuisine}+Restaurant&sensor=true&location=${latitude},${longitude}&radius=${radius}&key=${process.env.GOOGLE_API_KEY}`;

  return axios({
    method: 'get',
    url: searchURL,
    responseType: 'json'
  });
}


const handleQueries = function(body, cb) {
  //rankedCuisines = handleRestaurants.rankCuisine(body);

  //dummy data
  rankedCuisines = ['Chinese', 'Italian', 'Greek']
  body = {
    location: '2333 Keara Way, Charlotte, NC 28270',
    budget: 2,
    radius: 500,
  }

  //use Google's geocoder API to transform an address into latitude & longitude

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

  geocoder.geocode(body.location, (err, locationObject) => {
    const lat = locationObject[0].latitude;
    const long = locationObject[0].longitude;

    //map the rankedCuisine array into an array of promises for querying Google Places
    axios.all(rankedCuisines.map((cuisine) => {
      return requestRestaurants(cuisine, lat, long, body.radius);
    }))
      .then((responses) => {
        const restaurants = [];
        //aggregate the resulting restaurants into a restaurant matrix and add a cuisine property to each restaurant
        for (let i = 0; i < responses.length; i++) {
          restaurants.push(responses[i].data.results);
          restaurants[i].map((restaurant) => {
            restaurant.cuisine = rankedCuisines[i];
          });
        }
        //restaurants = handleRestaurants.rankRestaurants(restaurants);
        cb(restaurants);
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
>>>>>>> 6a84396364083fe1022f5c9572c259d31e20837b
