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

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
});