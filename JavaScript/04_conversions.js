let score1 = "21abc"
let score2 = "31"
let score3 = null  // Output will be 0. 
let score4 = undefined  // Output will be NaN.

//console.log(typeof score);

//Let convert String into Number

let valueInNumber = Number (score1)
let valueInNumber2 = Number (score2)
let valueInNumber3 = Number (score3)
let valueInNumber4 = Number (score4)

//console.log(typeof valueInNumber);
console.log(valueInNumber); 
// Output is NaN that means Not a Number it is because string contains alphabets also

console.log(valueInNumber2);
//Value in number 2 contain only numerical value so the output is Number. 

console.log(valueInNumber3);
console.log(valueInNumber4);

// Conversion into Boolean
let bool1 = 1 // Output is true 
let bool2 = "" // Output is flase
let bool3 = "Amol" // Output is True

//Converion 
let con1 = Boolean (bool1)
let con2 = Boolean (bool2)
let con3 = Boolean (bool3) 

// Output
console.log(con1);
console.log(con2);
console.log(con3);


// Conversion into String
let num1 = 312
let val = true

let numStr = String(num1)
let valStr = String(val)

console.log(numStr);
console.log("type of Number is : ",typeof numStr);
console.log(valStr);



/*
Conclusion :- 
Conversion into Number 
"22" => 22
"21abc" => NaN
boolean :- true => 1 ; false => 0
null => 0
undefined => NaN
 
Conversion into Boolean
"21" => true
"" => false
0 => false ; 1 => true

Conversion into String
21 => 21; but when you see type of then Output is string
Boolean true => true but it is also string not boolean value
*/