const name1 = "Amol-Prakash-Shiraskar"
const age = 21

// console.log(name1 + age); // Old out dated Method

// console.log(`Hello my name is ${name1} and I am ${age} years old`);
// This is latest method to write code.

// You can intialise string like this also

const name2 = new String('Nikhil') // By declaring like this sting becomes key-value pair

// console.log(name2[2]); // To see which character is at given value.
// console.log(name2.length); // To see the Length of String.
// console.log(name2.toUpperCase()); // To make all charater Upper case.
// console.log(name2.charAt(5)); // To see which character is at given value. 
// console.log(name2.indexOf('h')); // To see which value is at given character .

// const newStr1 = name2.substring(3, 6) // You cannot give negative values in Substring
// console.log(newStr1);

// const newstr2 = name2.slice(-6, 4) // You can give negative values in Substring
// console.log(newstr2);

const newStr3 = "    Amol    "
console.log(newStr3);
console.log(newStr3.trim()); // Removes Unneccesary spaces.

const email = "user@google.com"
console.log(email.replace("google", "gmail"));
console.log(email.includes("google"));

console.log(name1.split("-"));



