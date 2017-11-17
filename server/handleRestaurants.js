const rankCusine = function(body){
  let cusineTypeCounter = {};
  const reqByType = body.types;
  const wantToEat = reqByType.wantToEat;
  wantToEat.forEach(wantToEatType => {
    cusineTypeCounter[wantToEatType] =  cusineTypeCounter[wantToEatType] ?  cusineTypeCounter[wantToEatType] + 1 : 1;
  });
  const willNotEat = reqByType.willNotEat;
  willNotEat.forEach(willNotEatType => {
    cusineTypeCounter[willNotEat] =  cusineTypeCounter[willNotEat] ?  cusineTypeCounter[willNotEat] - 1 : -1;
  });
   cusineTypeSorted = Object.keys(cusineTypeCounter).sort((a,b) => {
    return cusineTypeCounter[b]-cusineTypeCounter[a];
   }
  );
 return cusineTypeSorted.slice(0, 3);
};

const sortRestaurantByRating = function(a, b)
{
  if(a.rating < b.rating)
        return 1;
      if(a.rating > b.rating)
        return -1;
      return 0;
};

const rankRestaurant = function(data, budget)
{
  const budget_level = budget || 2;
  //const restaurantsByCusine = data.results;
  //filter non-restaurant data
  let restaurantsByCusine = [];
  data.results.forEach((result) => {
    restaurantsByCusine.push({name:result.name, rating:result.rating, price_level:result.price_level
  });
  //if a budget_level is given
   const restaurantsByCusineAndBudget = restaurantsByCusine.filter((restaurant) => {
    return typeof(restaurant.price_level)==='number'&&restaurant.price_level === budget_level;
  });
  if(restaurantsByCusineAndBudget.length === 0)
  {
     restaurantsByCusine.sort(sortRestaurantByRating);
     return restaurantsByCusine;
     //return restaurantsByCusine.slice(0,1);
  }
  if(restaurantsByCusineAndBudget.length === 1) {
    return restaurantsByCusineAndBudget;}
  if(restaurantsByCusineAndBudget.length > 1)
  {
     restaurantsByCusineAndBudget.sort(sortRestaurantByRating);
     return restaurantsByCusineAndBudget;
     //return restaurantsByCusineAndBudget.slice(0,1);
  }
};

module.exports.rankCusine = rankCusine;
module.exports.rankRestaurant =rankRestaurant;



// req.body: {
//   location: '123 Fake St',
//   budget: 2,
//   radius: 500,
//   wantToEat: ['chinese', 'sushi', 'italian', 'chinese'],
//   willNotEat: ['italian', 'bar']
// }

// Prior to querying API:
//   create a search object {} on req.body (req.body.search = {})
//   iterate through wantToEat
//     create a key for each restaurant type with value of 1; increment by 1 if the key already exists
//   iterate through willNotEat
//     if the search object creates a key for a willNotEat entry, decrement the associated value by 2



// Steps to rank restaurants:
//   for each array:
//   filter: opening_hours = true & types includes 'restaurant'
//   create a hierarchy key on each restaurant
//     hiearchy ~=  3 * search object value + Math.abs(budged - price_level) + 2 * rating
//   sort the restaurants by hierarchy
//   return the highest scoring three from the three highest scored category

//   Alternatively: we could not concat all restaurants into a single array
//   Instead: carry out lines 28 - 31 on each array of restaurants and return the top 3 results from the top 3 queried restaurant type