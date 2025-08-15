// objects are collection of data and functionality
// creating Objects
// 1. Object Literal way to create a object using {} braces
// 2. object constructor syntax
let person = {};
person.userName = "Sridhar"; // setting a new property to the person object
console.log(person.userName); // accessing the property of the person object
console.log(person["userName"]); // accessing the property in another way using square bracket notation ,which is helpfull in some cases when the property name is a group of two word
console.log(person.age); // trying to access a property of the object which does not exist in the object , which gone return a undefined value.
person["age"] = 25; // another way of setting a property on the person object
console.log(person);

person.isAdmin = true;
console.log(" Person object before deleting isAdmin property ", person);

delete person.isAdmin; // deleting a property from the person object
console.log(
  `Person object after deleting isAdmin property ${JSON.stringify(person)}`
);

// checking whether the property exist in the object or not
// intuition is if a property exist in the object then it is going to return a value of some type ,if not then it gone return undefined ,so checking against the undefined gone help here

if (person.age === undefined)
  console.log(" the property you are looking for does not exist !");
else console.log(" The property exists in the object");

if (person.isAdmin === undefined)
  console.log(" the property you are looking for does not exist !");
else console.log(" The property exists in the object");

// In few cases the way of checking property existance using undefined gone fail when the propety value is undefined

person.isMarried = undefined; // the state is not yet defined here for isMarried property

console.log(person);
// { userName: 'Sridhar', age: 25, isMarried: undefined }

if (person.isMarried === undefined)
  console.log(" the property you are looking for does not exist !");
else console.log(" The property exists in the object");

// output :  the property you are looking for does not exist !
// even though the property exist in the object , the output is showing it doesnt exist
// to fix the issue the "in " keyword should be used

if (!("isAdmin" in person))
  console.log(" the property you are looking for does not exist !");
else console.log(" The property exists in the object");

// iteration over key in the object
// There are few ways to iterate over the object
console.log("Keys of the person object : ", Object.keys(person));
const personKeys = Object.keys(person);
for (let key of personKeys) {
  console.log(`${key} : ${person[key]}`);
}

// // Tasks
// Write the code, one line for each action:

let user = {}; // Create an empty object user.
user.name = "John"; // Add the property name with the value John.
user.surname = "Smith"; // Add the property surname with the value Smith.
user["name"] = "Pete"; // Change the value of the name to Pete.
delete user.name; // Remove the property name from the object.

//Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty(person));

let test = {};
console.log(isEmpty(test));

// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.
let sumOfSalaries = 0;
for (let salary in salaries) {
  sumOfSalaries += salaries[salary];
}
console.log(`The sum of salaries : ${sumOfSalaries}`);

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(menu) {
  for (const key in menu) {
    if (!isNaN(menu[key])) {
      menu[key] = menu[key] * 2;
    }
  }
}
console.log("Before the call : ", menu);

multiplyNumeric(menu);

console.log("After the call multiply by 2 : ", menu);
// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// Objects References and Copying

let obj1 = {
  name: "test",
};

let obj2 = obj1;
console.log(" before updated the value of obj1 from its reference :", obj1);
obj2.name = "updated from obj2";
console.log(" logging the obj1 to console :", obj1);
// objects are passed as a refernce not by the value (i.e in case of primitives)
// Two objects are equal , if they reference to the same object

const obj3 = {
  name: "test",
};

// even though the obj3 is a constant ,we can modifiy it property but cannot change the reference it is mapped to.

// Cloning ,Merging and object.assign

// copying a one more variable creates a one more references, in some case we need to create a new independent copy of the object ,which is cloning

let personClone = {}; //empty personclone object

for (const key in person) {
  personClone[key] = person[key];
}

console.log("cloned person object ", personClone);

// here person and personCloned objects are independent to each other ,manuplating one object wont effect the other one

// Object.assign() inbuilt method canbe used to clone objects

let personclone2 = Object.assign({}, personClone, { isEmployed: false });
console.log(personclone2);

//Nested cloning
// if the properties of object have values of object ,the cloning should be deep cloning where every property should be checked ,if its a object the property should be cloned

// There is in-built method structuredClone() to clone objects deeply

let shape = {
  name: " Rectangle",
  dimensions: {
    "width ": 10,
    breadth: 11,
  },
}; // object have object property values

let shapeClone = Object.assign({}, shape);
if (shapeClone.dimensions === shape.dimensions)
  console.log(" both the objects are equal");
// output :  both the objects are equal
// even though the object are cloned but the output is showing that both the objects are same
// that means the object is not cloned deeply

// To clone deeply, manuplating the cloned obj wont effect the original one
let shapeClone2 = structuredClone(shape);
if (shapeClone2.dimensions === shape.dimensions)
  console.log(" both the objects are same");
else console.log(" Both objs are not same");

// Garbage Collection

// Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions… All that takes memory.

// What happens when something is not needed any more? How does the JavaScript engine discover it and clean it up?

// object Methods ,this keyword

// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...

  read(a, b) {
    this.obj = {
      a: a,
      b: b,
    };
  },
  sum() {
    return this.obj.a + this.obj.b;
  },
  mul() {
    return this.obj.a * this.obj.b;
  },
};

calculator.read(1, 2);
console.log(calculator.sum());
console.log(calculator.mul());

// Chaining
// There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    console.log(this.step);
    return this;
  },
};
// Now, if we need to make several calls in sequence, we can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Modify the code of up, down, and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// Such an approach is widely used across JavaScript libraries.
