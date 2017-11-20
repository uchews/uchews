const rankCusineByHistory = function(historyDataByType) {
  let historyDataByTypeObj = {wantToEat: [], willNotEat:[]};

  historyDataByType.forEach(eachHistoryType => {
    historyDataByTypeObj.wantToEat.concat(eachHistoryType.wantToEat);
    historyDataByTypeObj.willNotEat.concat(eachHistoryType.willNotEat);
  });
  return rankCusine(historyDataByTypeObj);
};


const countFreq = function(arrData) {
  const counter = {};
  arrData.forEach((value) => {
    counter[value] = counter[value] ? counter[value] + 1: 1;
  });
  //return the most frequent one in history
  counterSorted = Object.keys(counter).sort((a,b) => {
    return counter[b]-counter[a];
   });
  return counterSorted.slice(0, 1);
};

const recommendSearchDataByHistory = function(historyData){
  const recommendSearchInput = {};
  for(var key in historyData) {
    if(key === 'foodType') {
      recommendSearchInput[key] = rankCusineByHistory(historyData[key]);
    }
    recommendSearchInput[key] = countFreq(historyData[key]);
  }
  return recommendSearchInput;
};


const rankCusine = function(reqByType){
  let cusineTypeCounter = {};

  const wantToEat = reqByType.wantToEat;
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
    if(result.types.includes('restaurant')) {
      restaurantsByCusine.push(
        {
          name:result.name, rating:result.rating, price_level:result.price_level
        });
    }
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
module.exports.recommendSearchDataByHistory = recommendSearchDataByHistory;
module.exports.rankRestaurant =rankRestaurant;


