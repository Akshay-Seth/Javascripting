const _ = require('lodash');
_.head([1, 2, 3]); 
_.tail([1, 2, 3]); 

const head = require('./head');
const tail = require('./tail');
// ... other requires would go here

head([1, 2, 3]); // => 1
tail([1, 2, 3]); // => [2, 3]

module.exports = 5;

// Example 2
// Can export an object (quite common!)
module.exports = { 
  firstName: "Lighthouse",
  lastName:  "Labs"
}

// Example 3
// Can export a function (we did this for all our functions)
module.exports = function() {
  return "developers, developers, developers!"; 
}