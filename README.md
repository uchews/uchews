# API key setup #
1. create a Google API key
2. enable Google Places API Web Service
3. enable Google Maps Geocoding API
4. enable Google Maps JavaScript API
5. inside Credentials, select the api key
6. select HTTP referrers (web sites) under Application Restrictions
7. add the following urls to Accept requests from these HTTP referrers (web sites) (Optional):
    *127.0.0.1:1337
    *frozen-beach-49440.herokuapp.com*
8. inside of your .env file add:
    GOOGLE_API_KEY=[api key]
9. inside of map.jsx insert your API key as a string on line 86