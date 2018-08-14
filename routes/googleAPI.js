const express = require('express');
const router = express.Router();

//Create Google Client
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBB7AWuOT9mWC7DiUu1H3vD3B5jxxBR-Lk',
  Promise: Promise
});


router.post('/places', (req, res) => {

    getLocation(req.body.search)    
    .then(data => {
       getPlaces(data);
      res.redirect('back'); 
    })
    .catch(err => {
      console.log("Error" + err);
    })
       
});



////////////////////Functions:

///////////
async function getPlaces(loc){
  const location = `${loc.lat},${loc.lng}`;
  const rad = 3000;
  const api_key = 'AIzaSyBB7AWuOT9mWC7DiUu1H3vD3B5jxxBR-Lk';
  // const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${rad}&keyword=resort`

  // console.log(url)
 const result = await googleMapsClient.placesNearby( {location: location, radius: rad, keyword: "resort"}) 
  .asPromise()
  .then(data => {
    console.log('Data: '+data)
  })
}

//////////////////////////////////// Get Geo Location
async function getLocation(search){
const result = await googleMapsClient.geocode({address: search })
    .asPromise()
    .then((response) => {    
      const res = response.json.results
      data = res[0];
      loc = data.geometry.location;
      return loc;    
    })
    .catch((err) => {
      console.log(err);
})

return result;
}



module.exports = router;


