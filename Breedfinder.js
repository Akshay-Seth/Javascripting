const request = require('request');
const thing = process.argv[2]
request(`https://api.thecatapi.com/v1/breeds/search?q=${thing}`,function(error,response,body){
    if (error === null){
        const data = JSON.parse(body);
        console.log(data[0].description);
        console.log(typeof data);
    }
    else{
        console.log("Error, Breed not found")
    }
}); 
//console.log(process.argv)
