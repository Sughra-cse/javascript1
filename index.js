

// console.log("LET & CONST");
// let variable = "Test";
// console.log(variable);
// l 

// variable = "Another value";
// console.log(variable);




// function reset() {
//     
//     let variable = null;
//     console.log(variable);
// }
// reset();
// console.log(variable);

// Arrow Functions
// console.log("ARROW FUNCTIONS");
// const addNumbers = function (number1,number2){
//     return number1 + number2;
// };
// console.log(addNumbers(20, 89));

// const multiplyNumbers = (number1,number2) => number1 * number2;
// console.log(multiplyNumbers(89, 20));

// const greet = () => {
//     console.log("Hello!");
// };
// greet();

// const greetFriend = friend => console.log(friend);
// greetFriend("Elizey");

// Default Parameters
// console.log("DEFAULT PARAMETERS");
// const countdown = (start = 10) => {
//     console.log(start);
//     while (start > 0) {
//         start--;
//     }
//     console.log("Done!", start);
// };
// countdown();

// // Rest & Spread
// console.log("REST & SPREAD");
// const numbers = [1, 10, 99, -5];
// console.log(Math.max(33, 99, 10, -3));
// console.log(Math.max(...numbers));

// function makeArray(name, ...args) {
//     return args;
// }
// console.log(makeArray("Aiman", 1, 2, 6));

//Destructuring

//Destructuring -Array

// const myHobbies = ['Cooking','Sports'];
// console.log(myHobbies[0],myHobbies[1]);

// const myHobby1 = myHobbies[0];
// const myHobby2 = myHobbies[1];

// console.log(myHobby1,myHobby2);

//ES6

// const [hobby1,hobby2] = myHobbies;
// console.log(hobby1,hobby2)


//Destructuring - Objects
// const userData = {username: "Heena",age:24}
// const myName = userData.username;
// const age = userData.age;
// console.log(myName,age);

//ES6

// const {username,age} = userData;
// console.log(username,age)


//Alias
// const {username:myName,age:myAge} = userData;

// console.log(myName,myAge);

//Template Literals

const myFriendName = 'Elizey';
const greeting = "Happy Birthday " + myFriendName + ", Have a Great year ahead.";
console.log(greeting);






