// const http = new searchPlaces;
// const ui   = new UI;
// let loc = '';
// let rad = '3000';

// //Get Search input
// const inputUi = document.getElementById('searchInput');

// //Replace blank spaces with &
// //Save search words in var loc
// inputUi.addEventListener('keyup', (e) => {
//     e.preventDefault();
//     const str =  e.target.value.toString(); 
//     loc = str.replace(/\s/g, "&");    
// })

// inputUi.addEventListener('keyup', (e) => {
//     if(e.keyCode == '13'){
//         //construct the url
//         const locationLink = `https://maps.googleapis.com/maps/api/geocode/json?address=${loc}&components=country:DO&key=${http.api_key}`
//         // console.log('location link: ' + locationLink)
//         http.getLocation(locationLink)
//             .then(data => {
//                 const location = `${data.lat},${data.lng}`;
//                 const placesLink = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${rad}&keyword=resort&key=${http.api_key}`
                
//                 http.getPlaces(placesLink, location)
//                 // ui.getPlaces(placesLink);
//             })
        
//     }
// })



