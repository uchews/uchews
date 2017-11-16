


req.body: {
  location: '123 Fake St',
  budget: 2,
  radius: 500,
  wantToEat: ['chinese', 'sushi', 'italian', 'chinese'],
  willNotEat: ['italian', 'bar']
}

//rankCusine
Prior to querying API:
  create a search object {}
  iterate through wantToEat
    create a key for each restaurant type with value of 1; increment by 1 if the key already exists
  iterate through willNotEat
    if the search object creates a key for a willNotEat entry, decrement the associated value by 2
  return search object
  |
  |
  V
Querying the API:
  use geocoder to translate the address into latitude and longitude
  send a get request to google places for THE TOP 3 keys in the search object
  add the associated search object value to each returned restaurant object
  add a cuisine property to each restaurant object
  |
  |
  V
Steps to rank restaurants:
  for each array:
  filter: opening_hours = true & types includes 'restaurant'
  create a hierarchy key on each restaurant
    hiearchy ~=  3 * search object value + Math.abs(budget - price_level) + 2 * rating
  sort the restaurants by hierarchy
  return the highest scoring three from the three highest scored category

  Alternatively: we could not concat all restaurants into a single array
  Instead: carry out lines 28 - 31 on each array of restaurants and return the top 3 results from the top 3 queried restaurant type





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