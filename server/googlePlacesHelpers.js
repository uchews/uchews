const axios = require('axios');
const Nodegeocoder = require('node-geocoder');


const requestRestaurants = function(foodType, latitude, longitude, radius) {
  const searchURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${foodType}+Restaurant&sensor=true&location=${latitude},${longitude}&radius=${radius}&key=${process.env.GOOGLE_API_KEY}`;

  return axios({
    method: 'get',
    url: searchURL,
    responseType: 'json'
  });
}


const handleQueries = function(body, cb) {
  //rankedCuisines = handleRestaurants.rankCuisine(body);
  rankedCuisines = ['Chinese', 'Italian', 'Greek']
  body = {
    location: '2333 Keara Way, Charlotte, NC 28270',
    budget: 2,
    radius: 500,
  }
  let geocoder = Nodegeocoder({
    provider: 'google',
    apiKey: process.env.GOOGLE_API_KEY
  });
  geocoder.geocode(body.location, (err, locationObject) => {
    const lat = locationObject[0].latitude;
    const long = locationObject[0].longitude;

    axios.all(rankedCuisines.map((cuisine) => {
      return requestRestaurants(cuisine, lat, long, body.radius);
    }))
      .then((responses) => {
        const restaurants = [];
        for (let i = 0; i < responses.length; i++) {
          restaurants.push(responses[i].data.results);
          restaurants[i].map((restaurant) => {
            restaurant.cuisine = rankedCuisines[i];
          });
        }
        //restaurants = handleRestaurants.rankRestaurants(restaurants);
        cb(restaurants);
      });
  });

}


module.exports.requestRestaurants = requestRestaurants;
module.exports.handleQueries = handleQueries;
