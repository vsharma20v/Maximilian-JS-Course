// // Enum
// const UP = Symbol("UP");
// const directions = {
//   UP: Symbol("UP"),
//   DOWN: Symbol("DOWN"),
//   LEFT: Symbol("LEFT"),
//   RIGHT: Symbol("RIGHT"),
// };

// console.log(directions);
// console.log(directions.UP);
// console.log(directions.DOWN);
// console.log(directions.LEFT);
// console.log(directions.RIGHT);

// console.log(Symbol.for("UP"));
const uid = Symbol();

// console.log(uid);

const user = {
  //   id: "p1",
  [uid]: "p1",
  name: "Max",
  age: 22,
  [Symbol.toStringTag]: "User",
};

user.id = "p2";
// console.log(user[uid]="23");
// console.log(user.toString());

// const number = [1,2,3,4];
// const iterator = number[Symbol.iterator]();
// console.log(iterator);

// const name= "vaibhav";
// const it = name[Symbol.iterator]();
const company = {
  currentEmp: 0,
  employees: ["Max", "Manu", "Anna"],
  next() {
    if (this.currentEmp >= this.employees.length) {
      return { value: undefined, done: true };
    }
    const returnValue = {
      value: this.employees[this.currentEmp],
      done: false,
    };
    this.currentEmp++;
    return returnValue;
  },
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

function Iterator(values) {
  let nextIndex = 0;
  return {
    next: function () {
      if (nextIndex < values.length) {
        return {
          value: values[nextIndex++],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
}

const myArray = ["Apples", "Grapes", "Oranges", "Bhindi"];
const arrIt = Iterator(myArray);

// console.log(arrIt.next());
// console.log(arrIt.next());
// console.log(arrIt.next());
// console.log(arrIt.next());
// console.log(arrIt.next());

let fruit = arrIt.next();
while (!fruit.done) {
  console.log(fruit.value);
  fruit = arrIt.next();
}

const num = [1, 2, 3, 4, 5];
const numIterator = num[Symbol.iterator]();

// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());

// for(const n of numIterator){
//   console.log(n);
// }

// function squared(nums) {
//   let index = 0;
//   return {
//     next: function () {
//       if (index < nums.length) {
//         return {
//           value: nums[index] * nums[index++],
//           done: false,
//         };
//       } else {
//         return {
//           value: undefined,
//           done: true,
//         };
//       }
//     },
//   };
// }

// const numsIt = squared(num);
// console.log(numsIt.next());
// console.log(numsIt.next());
// console.log(numsIt.next());
// console.log(numsIt.next());
// console.log(numsIt.next());
// console.log(numsIt.next());

const course = {
  title: "JS - The Complete Guide",
};

// Reflect.setPrototypeOf(course, {
//   toString() {
//     return this.title;
//   },
// });

// console.log(course);
// console.log(Reflect.deleteProperty(course,"title"));
// console.log(course);

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    if (propertyName === "length") return 0;
    // return obj[propertyName];
    return obj[propertyName] ?? "Not Found";
  },
  set(obj, propertyName, propertyValue) {
    if (propertyName in obj) return;
    obj[propertyName] = propertyValue;
    return true;
  },
};
const pCourse = new Proxy(course, courseHandler);
pCourse.title = 5;
console.log(pCourse.price, pCourse.length, pCourse.rating);
