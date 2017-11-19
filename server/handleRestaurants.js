const rankCusine = function(body){
  let cusineTypeCounter = {};
  const wantToEat = body.wantToEat;
  wantToEat.forEach(wantToEatType => {
    cusineTypeCounter[wantToEatType] =  cusineTypeCounter[wantToEatType] ?  cusineTypeCounter[wantToEatType] + 1 : 1;
  });
  const willNotEat = body.willNotEat;
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
  console.log('data prior to ranking restaurants: ', data);
  const budget_level = budget || 2;
  //const restaurantsByCusine = data.results;
  //filter non-restaurant data
  let restaurantsByCusine = [];
  data.results.forEach((result) => {
    restaurantsByCusine.push({ name:result.name, rating:result.rating, price_level:result.price_level });
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
