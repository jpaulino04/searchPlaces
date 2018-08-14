// class searchPlaces {
//     constructor(){
//         //maps and places apis enabled
//         this.api_key = 'AIzaSyBB7AWuOT9mWC7DiUu1H3vD3B5jxxBR-Lk';
//         this.location = "Dominican Republic";
//         this.keyword =  "resort"
//     }

//     // Get latitude an longitude
//     async getLocation(url){
//         const loc = await fetch(url)
//         const res = await loc.json();
//         const locStr =res.results[0].geometry.location;

//         return {
//             lat: locStr.lat,
//             lng: locStr.lng
//         }    }

//     async getPlaces(url, location){    
//         const service = new google.maps.places.PlacesService(location);
//         console.log(service)

//     }


// }


// //Nearby Search requests
// //https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters
// //https://maps.googleapis.com/maps/api/geocode/json?components=locality:santa+cruz|country:ES&key=YOUR_API_KEY