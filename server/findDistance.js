

const toRad = (num) => {
  return num * Math.PI / 180;
}

const haversine = (homeLat, homeLong, restLat, restLong) => {
  const R = 6371000;
  const phi1 = toRad(homeLat);
  const phi2 = toRad(restLat);
  const deltaphi = toRad(restLat - homeLat);
  const deltalambda = toRad(restLong - homeLong);

  const a = Math.sin(deltaphi / 2) * Math.sin(deltaphi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltalambda / 2) * Math.sin(deltalambda / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c

}

const filterByDist = (restaurants, homeLat, homeLong, radius) => {
  const filteredRest = restaurants.filter((restaurant) => {
    let distance = haversine(homeLat, homeLong, restaurant.geometry.location.lat, restaurant.geometry.location.lng)
    return distance <= radius;
  });
  if (filteredRest.length === 0) {
    return filterByDist(restaurants, homeLat, homeLong, radius * 2);
  }
  return filteredRest;
}

module.exports.filterByDist = filterByDist;