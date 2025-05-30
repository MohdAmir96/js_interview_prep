// ########################### Temporal Dead Zone ###########################################

// The Temporal Dead Zone (TDZ) refers to the time between the entering of a scope (like a block or function) and the point at which a variable declared using let or const
//  is initialized. During this period, the variable is in an uninitialized state, and trying to access it results in a ReferenceError.

// In simpler terms, the TDZ is the "dead zone" where the variable exists but is not yet accessible, which helps to avoid issues related to hoisting, which happens in older
//  variable declaration methods like

//
//
//
//
//
//

//********************************* CALL APPLY AND BIND ********************************************

// call apply and bind are the method to to invoke a function with a  specific this keyword and individual arguments.

const greet = function (city, country) {
  return `My name is ${this.firstName} ${this.lastName}, from ${city}, ${country}`;
};

greet.call({ firstName: "amir", lastName: "khan" }, "Gkp", "India"); // first argument is this, rest a individual argmants
greet.apply({ firstName: "amir", lastName: "khan" }, ["Gkp", "India"]); // first argument is this, rest a individual argmants are passed in an array
const bind = greet.bind(
  { firstName: "amir", lastName: "khan" },
  "Gkp",
  "India"
); // its is same as call, just it will not immidiately invoked
bind(); // now it will be called
console.log(bind());
