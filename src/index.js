// Watch the file using tsc --watch index
// tsc --init will create config file
// Running tsc without a file afterwards will just compile any typescript file in the project
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let id = 5; // standard js, but typescript with implicitly set it as a Number
// let id: number = 5; // TypeScript explicit declaration of number type.
// Basic Types
var id = 5;
var company = "Fuller";
var isPublished = true;
var x = "Hello";
x = true; // This won't cause an error because we set it to be anything.
// Can also initialize and assign letter
var age;
age = 5;
// Arrays
var ids = [1, 2, 3, 4, 5];
// ids.push('Hello') // errors because we set the type of the array values to number
var arr = [1, true, "Hello"]; // Able to use type any if for some reason you don't know what type of values you're going to receive.
// Tuple
var person = [1, "Fuller", true]; //Tuple allows us to predefine the types in array so we don't have to use an Array of any type, but it's limiting in that size of the tuple is limited to what was declared.
// Tuple Array
var employee; // To work around the above limitation, you can add the empty brackets to declare an Array of Tuples.
employee = [
    [1, "Fuller"],
    [2, "Sennacy"],
    [3, "Alvin"],
];
// Union
// If you want a variable to hold more than 1 type, use Union
var pid = 22;
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
// By default, it will automatically assign incremental numeric values starting from 0. If we decide to set Up=1, it'll change everything to increment from 1, resulting in Down = 2, Left = 3, Right = 4
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// Can also use strings as values.
// Objects
var user = {
    id: 1,
    name: "John"
};
var userObject = {
    id: 1,
    name: "Fuller"
};
// Type Assertion
// Tells the compiler that we'll treat the entity as a different type.
var cid = 1;
var customerId = cid; // Method 1: customerId is now type number.
var customerId2 = cid; // Method 2
// Functions
//each arguments type then return value type
function addNum(x, y) {
    return x + y;
}
// If you don't have a return value, you can use a void type.
function log(message) {
    console.log(message);
}
var userInt = {
    id: 1,
    name: "John"
};
var p1 = 1;
var add = function (x, y) { return x + y; }; // Since we're using the MathFunc interface, this function will expect two number inputs and a returned number value as well.
var sub = function (x, y) { return x - y; }; // This is also using the interface, but we're able to change what the function does while keeping the same type parameters for input and output
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var fuller = new Person(1, "Fuller");
var brad = new Person(2, "Brad");
var PersonInt = /** @class */ (function () {
    function PersonInt(id, name) {
        this.id = id;
        this.name = name;
    }
    PersonInt.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return PersonInt;
}());
// Extending Classes
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, "James", "Developer");
// So emp has access to .register(), .id, .name
// So employee is a sub class of PersonInterface
// Generics
function getArray(items) {
    return new Array().concat(items);
}
// Let's say we want one to an array of numbers and one to be an array of strings, and we only want to use the above function to create them.
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(["fuller", "brad", "jill"]);
numArray.push('hello'); // valid code because getArray takes in and returns the 'any' type
// We can add a generic to this so that the num or str Array have to constrain to those types.
function getArrayGeneric(items) {
    return new Array().concat(items);
}
var numArrayGeneric = getArrayGeneric([1, 2, 3, 4]);
var strArrayGeneric = getArrayGeneric(["brad", "fuller", "jill"]);
// Allows us to create reusable components that we can replace with whatever type we want.
