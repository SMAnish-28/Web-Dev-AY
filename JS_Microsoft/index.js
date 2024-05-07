console.log('namaskar bondhu kemon acho?');

const place = "Kolkata";
console.log("Hello, %s ", place);

const greet = "Hello";
console.log("%s, %s", greet, place);

// Template literals
// using backticks
console.log(`${greet}, ${place}`);

let value  = "Reverse Me";
let reversedValue = "";

value.split("").forEach((char) => {
    reversedValue = char + reversedValue;
});

console.log(reversedValue);


function reverseString(value){
    let reversedValue = "";
    value.split("").forEach((char) => {
        reversedValue = char + reversedValue;
    });
    return reversedValue;
}

console.log(reverseString("Reverse Me")); // em esreveR

// 3 ways to declare variables
// var, let, const
// var is function scoped, can be changed in scope and available before declaration
// let is block scoped, can be changed in scope and only available after declaration
// const is block scoped, cannot be changed in scope and only available after declaration
// what to use when?
// -> const by default
// -> let in loops
// -> var in functions


//String
//Concatenation
// combining two or more strings
// concatenating will make a new string
// done with + operator

let str1 = "hello ";
let str2 = "world";

console.log(str1 + str2); //hello world
console.log(str1 + "big " + str2); // hello big world
// ---------------
let num1= 1;
let num2 = "1";
console.log(num1+num2); // 11
console.log(num1+1); //2

// typeof -> returns a string of the data type primitive
// instanceof -> returns a boolean of if a value matches the data type

let x = 'something';
x = 1;
x = 1 + 'hello'; // is x a string or number?
// result -> 1hello

let xx = 0 == ''; // true, type coerced
let xxx = 0 === ''; // false, type respected

