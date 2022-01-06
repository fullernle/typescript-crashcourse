// Watch the file using tsc --watch index
// tsc --init will create config file
// Running tsc without a file afterwards will just compile any typescript file in the project

// let id = 5; // standard js, but typescript with implicitly set it as a Number
// let id: number = 5; // TypeScript explicit declaration of number type.

// Basic Types
let id: number = 5;
let company: string = "Fuller";
let isPublished: boolean = true;
let x: any = "Hello";

x = true; // This won't cause an error because we set it to be anything.

// Can also initialize and assign letter
let age: number;
age = 5;

// Arrays
let ids: number[] = [1, 2, 3, 4, 5];
// ids.push('Hello') // errors because we set the type of the array values to number

let arr: any[] = [1, true, "Hello"]; // Able to use type any if for some reason you don't know what type of values you're going to receive.

// Tuple
let person: [number, string, boolean] = [1, "Fuller", true]; //Tuple allows us to predefine the types in array so we don't have to use an Array of any type, but it's limiting in that size of the tuple is limited to what was declared.

// Tuple Array
let employee: [number, string][]; // To work around the above limitation, you can add the empty brackets to declare an Array of Tuples.

employee = [
	[1, "Fuller"],
	[2, "Sennacy"],
	[3, "Alvin"],
]
