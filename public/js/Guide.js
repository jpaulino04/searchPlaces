
//Required params
//key, input and inputtype (textquery or phonenumber prefixed by a plus sign ("+"))

//Nearby Search requests
//https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters
//A Nearby Search lets you search for places within a specified area. You can refine your search request by supplying keywords or specifying the type of place you are searching for.

//*****IMPORTANT */
//Required parameters
//key, location, radius, 
//Do not include radius if rankby=distance is specified
//if rankby=distance, specify keyword, name or type
//type  ---> amusement_park, lodging


//22 and 30
//sample:
//https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDlcn0kh3_GbfC3YooiQ1GuiBtprBSjayM