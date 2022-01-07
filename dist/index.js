"use strict";
// Watch the file using tsc --watch index
// tsc --init will create config file
// Running tsc without a file afterwards will just compile any typescript file in the project
// let id = 5; // standard js, but typescript with implicitly set it as a Number
// let id: number = 5; // TypeScript explicit declaration of number type.
// Basic Types
let id = 5;
let company = "Fuller";
let isPublished = true;
let x = "Hello";
x = true; // This won't cause an error because we set it to be anything.
// Can also initialize and assign letter
let age;
age = 5;
// Arrays
let ids = [1, 2, 3, 4, 5];
// ids.push('Hello') // errors because we set the type of the array values to number
let arr = [1, true, "Hello"]; // Able to use type any if for some reason you don't know what type of values you're going to receive.
// Tuple
let person = [1, "Fuller", true]; //Tuple allows us to predefine the types in array so we don't have to use an Array of any type, but it's limiting in that size of the tuple is limited to what was declared.
// Tuple Array
let employee; // To work around the above limitation, you can add the empty brackets to declare an Array of Tuples.
employee = [
    [1, "Fuller"],
    [2, "Sennacy"],
    [3, "Alvin"],
];
// Union
// If you want a variable to hold more than 1 type, use Union
let pid = 22;
//These don't error since Unions allows variables to be multi typed.
pid = "22";
pid = [1, 2, 3];
// Enum
// Allows us to define a set of named constants, numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
