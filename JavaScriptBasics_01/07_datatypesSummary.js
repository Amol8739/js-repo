/* Data Types is divided into 2 types on the basis of how the data is stored in the memory and 
how to access it. 

1) Primitive Datatype

- Stores single value
- Immutable (cannot be changed directly)
- Stored by value
- Faster and memory efficient
- Primitive Datatype are call by value means that When you copy datatype the the original
  reference is not used it is only copied. 
- There are 7 types.
1) String
2) Number
3) Boolean
4) Null
5) Undefined
6) Symbol
7) BigInt
*/

// Symbol Example :
// let id = Symbol('123')
// let anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);

// BigInt Example :
// let bigInt = 18431546325185431315n // n is used for Big Numbers 
// console.log(bigInt);




/*
2) Non - Primitive or Reference Datatype

- Can store multiple values
- Mutable
- Stored by reference
- Can have methods & properties
- Types of Non - Primitive Datatype
1) Array
2) Objects
3) Funtions
*/
//Array Example :

// let heros = ["Superman", "Batman", "Ironman"]

//Object Example :

// let obj = {
//     name : "Amol",
//     age : 55,
//     class : "BE"
// }

//Function Example :

// const myFirstFunc = function () {
//   console.log("Hello World");
// }

// console.log(typeof heros); // Output is Object
// console.log(typeof obj);  // Output is Object
// console.log(typeof myFirstFunc); // Output is Function but actually it is ObjectFunction.

// --------------------x--------------------x--------------------x--------------------x--------------------x--------------------x--------------------x--------------------x

/* Stack Memory (Stores Primitive Datatype)

- If you make changes in values it will not change the original values.
*/

let name1 = "Amol"
let name2 = name1
name2 = "Nikhil"

console.log("name 1 is : ", name1);
console.log("name 2 is : ", name2);



/* Heap Memory (Stores Non-Primitive Datatype)

 - If you make changes in values it will change the original values.
*/

let user1 = {
  id : "12345",
  email : "user1@gmail.com"
}

let user2 = user1
user2.email = "user2@gmail.com"

console.log(user1.email);
console.log(user2.email);
console.log(user2.id);
