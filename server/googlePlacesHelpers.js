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
        //let rankedRest = handleRestaurants.rankRestaurants(responses[i].data.results)
        //should push rankedRest rather than responses[i] below
        restaurants.push(responses[i].data.results);
        restaurants[i].map((restaurant) => {
          restaurant.cuisine = rankedCuisines[i];
        });
      }
      cb(restaurants);
    });
  });
}


module.exports.requestRestaurants = requestRestaurants;
module.exports.handleQueries = handleQueries;

