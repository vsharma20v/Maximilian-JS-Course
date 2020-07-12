// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(1, 5));
// console.log(add(12, 15));

// function addRandom(num1) {
//   return num1 + Math.random();
// }

// console.log(addRandom(5));

// let previousResult = 0;

// function addMoreNumbers(num1, num2) {
//   const sum = num1 + num2;
//   previousResult = sum;
//   return sum;
// }

// console.log(addMoreNumbers(1, 2));

// const hobbies = ["sport", "cooking"];

// function printHobbies(h) {
//   h.push("coding");
//   console.log(h);
// }
// printHobbies(hobbies);

// let multiplier = 1.1;
// function createTaxCalculator(tax) {
//   function calculateTax(amount) {
//     console.log(multiplier);
//     return amount * tax * multiplier;
//   }
//   return calculateTax;
// }

// // const vatAmount = calculateTax(100,0.19);
// // const incomeTax = calculateTax(100,0.25);

// const calculateVatAmount = createTaxCalculator(0.19);
// const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

// console.log(calculateVatAmount(100));
// console.log(calculateIncomeTaxAmount(200));

// let userName = "vaibhav";

// function greetUser() {
// //   let name = "Anna";
//   console.log("Hi " + name);
// }

// // let name = "Vibhu";

// userName = "Sharma";
// greetUser();

// const result = (function (a, b) {
//   return a + b;
// }(4, 2));

// console.log(result);

// {
//   let age = 30;
//   console.log(age);
// }
// console.log(age);

// function powerOf(x, n) {
//   if (n === 0) return 1;
//   else if (n === 1) return x;
//   else return x * powerOf(x, n - 1);
// }

// function powerOf(x, n) {
//     return n===0?1:(n===1?x:x*powerOf(x,n-1));
//   }

// function powerOf(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result = result * x;
//   }
//   return result;
// }

// console.log(powerOf(3, 3));

const mySelf = {
  name: "vaibhav",
  friends: [
    {
      name: "Vibhu",
      friends: [
        {
          name: "Alex",
          friends:[
              {
                  name:"Mayank",
                  friends:[
                      {
                          name:"Aman",
                      }
                  ]
              },{
                  name:"Nischay"
              }
          ]
        },
      ],
    },
    {
      name: "Romil",
    },
  ],
};

function getFriendName(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendName(friend));
  }

  return collectedNames;
}

console.log(getFriendName(mySelf));
