//rankCusine: pick the top three types of cusine based on counts of wantToEat and willNotEat, for each type of wantToEat +1, for each type of willNotEat -1.
const rankCusine = function(body){
  let cusineTypeCounter = {};
  const wantToEat = body.wantToEat;
  wantToEat.forEach(wantToEatType => {
    cusineTypeCounter[wantToEatType] =  cusineTypeCounter[wantToEatType] ?  cusineTypeCounter[wantToEatType] + 1 : 1;
  });
  const willNotEat = body.willNotEat;
  willNotEat.forEach(willNotEatType => {
    cusineTypeCounter[willNotEatType] =  cusineTypeCounter[willNotEatType] ?  cusineTypeCounter[willNotEatType] - 1 : -1;
  });
   cusineTypeSorted = Object.keys(cusineTypeCounter).sort((a,b) => {
    return cusineTypeCounter[b]-cusineTypeCounter[a];
   }
  );
  const results = cusineTypeSorted.slice();
  if(results.length < 3){
    return results;
  }
 return results.slice(0, 3);
};


const sortRestaurantByRating = function(a, b)
{
  if(a.rating < b.rating)
        return 1;
      if(a.rating > b.rating)
        return -1;
      return 0;
};

//rankRestaurant: for a given type of cusine and budget, sort the restaurants based on rating in a decreasing order.
const rankRestaurant = function(data, budget)
{
  console.log('data prior to ranking restaurants: ', data);
  const budget_level = budget || 2;
  //const restaurantsByCusine = data.results;
  let restaurantsByCusine = data.results;
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

//rankCusineByHistory: return a search history of wantToEat and willNotEat on cusine types
const rankCusineByHistory = function(historyDataByType) {
  let historyDataByTypeObj = {wantToEat: [], willNotEat:[]};

  historyDataByType.forEach(eachHistoryType => {
    historyDataByTypeObj.wantToEat.concat(eachHistoryType.wantToEat);
    historyDataByTypeObj.willNotEat.concat(eachHistoryType.willNotEat);
  });
  return historyDataByTypeObj;
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

//recommendSearchDataByHistory: recommended search based on the most frequently searched distance, budget, the most recently searched location and the wantToEat and willNotEat cusine types from this specific user's seaching history.
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

module.exports.rankCusine = rankCusine;
module.exports.rankRestaurant =rankRestaurant;
module.exports.recommendSearchDataByHistory = recommendSearchDataByHistory;


