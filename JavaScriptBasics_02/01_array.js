const arr1 = [0, 1, 2, 3, 4, 5] // We can use any Datatypes in Arrays    
// console.log(arr1[2]);

const arr2 = new Array("Amol", "Shiraskar")
// console.log(arr2[1]);

// Array Methods

// arr1.push(6) // Adds Value in your Array. It can add any Datatype
// arr1.push("Amol") 
// arr1.pop() // Removes last element from Array.
// arr1.unshift(8) // Add Value at the Beginning.
// arr1.shift() // Removes Value from the Beginning.
// console.log(arr1);

// console.log(arr1.includes(8));
// console.log(arr1.indexOf(2));

const newArr = arr1.join()
// console.log(newArr); // All Value is changed into String.
// console.log(typeof newArr);

// Slice And Splice
console.log("A :-", arr1);

const newArr2 = arr1.slice(1, 3) // It Do not changes the Original Array. 


console.log("B :-", arr1);

const newArr3 = arr1.splice(1, 3) // It changes the Original Array. 

console.log("C :-", arr1);
console.log("Slice :-", newArr2);
console.log("Splice :-", newArr3);

/* 

- Slice Print value till End Number exculding End Number.
- Splice Print value till End Number but inculding End Number.
- The main difference of Slice and Splice is 
  Splice changes the Orignal Array and 
  Slice do not changes the Original Array.

*/
