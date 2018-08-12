class searchPlaces {
    constructor(){
        this.api_key = '';
        this.location = "Dominican Republic";
        this.keyword =  "resort"
    }

    async get(url){
        const response = await fetch(url)
        console.log(res)
    }

    async getLocation(url){
        const loc = await fetch(url)
        const res = await loc.json();
        const locStr =res.results[0].geometry.location;

        return {
            lat: locStr.lat,
            lng: locStr.lng
        }
    }


}


//Nearby Search requests
//https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters
//https://maps.googleapis.com/maps/api/geocode/json?components=locality:santa+cruz|country:ES&key=YOUR_API_KEY



