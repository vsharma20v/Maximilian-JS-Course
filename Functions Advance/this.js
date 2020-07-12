// "use strict";

// let fun = () => {
//   console.log("Inside function ", this === window);
// };

// fun();

// console.log(this === window);

const animals = ["dog", "cat", "rat", "duck"];


let displayAnimals = () => {
  console.log(this === animals);
  return this;
};

// displayAnimals.call(animals);

let a = new displayAnimals();