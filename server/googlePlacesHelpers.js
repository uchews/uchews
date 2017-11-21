const axios = require('axios');
const Nodegeocoder = require('node-geocoder');
const handleRestaurants = require('./handleRestaurants.js');
const findDistance = require('./findDistance.js');


//returns a promise to a query url for each cuisine type to be searched
const requestRestaurants = function(cuisine, latitude, longitude, radius) {
  const searchURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${cuisine}+food&sensor=true&location=${latitude},${longitude}&key=${process.env.GOOGLE_API_KEY}`;

  return axios({
    method: 'get',
    url: searchURL,
    responseType: 'json'
  });
}


const handleQueries = function(body, cb) {
  //Use the rankCusine function to transform the users' input data into a list of desired cuisine types
  let rankedCuisines = handleRestaurants.rankCusine(body);

  //use Google's geocoder API to transform an address or zip code into latitude & longitude
  let geocoder = Nodegeocoder({
    provider: 'google',
    apiKey: process.env.GOOGLE_API_KEY
  });
  geocoder.geocode(body.location, (err, locationObject) => {
    if (err) {
      console.log('ERROR:', err);
    }
    const lat = locationObject[0].latitude;
    const lng = locationObject[0].longitude;

    //convert user's input radius from miles to meters
    const radius = body.radius * 1600;

    //map the rankedCuisine array into an array of promises for querying Google Places
    axios.all(rankedCuisines.map((cuisine) => {
      return requestRestaurants(cuisine, lat, lng);
    }))
    .then((responses) => {
      const restaurants = [];
      //aggregate the resulting restaurants into a restaurant matrix and add a cuisine property to each restaurant
      for (let i = 0; i < responses.length; i++) {
        //rank the returned restaurants in accordance with the users' input preferences
        let rankedRest = handleRestaurants.rankRestaurant(responses[i].data, body.budget);
        //filter out restaurants outside the input search radius
        rankedRest = findDistance.filterByDist(rankedRest, lat, lng, radius);
        restaurants.push(rankedRest);
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