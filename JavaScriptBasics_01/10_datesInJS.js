// Dates 
// All below Syntax gives output of current Date and Time
let date1 = new Date()
// console.log(date1);
// console.log(date1.toString()); // In String format 

// console.log(date1.toLocaleDateString()); // In Numerical format only Date

// console.log(date1.toLocaleString()); // In Numerical format with Time

// console.log(date1.toJSON()); // In Numerical format with Time in Milli-second

// console.log(date1.toDateString()); // In Word format with Day

// console.log(typeof date1); // It is an Object with an Instance

// Below  is Any Date you want to print

// let createdDate1 = new Date(20, 1, 2025)
let createdDate2 = new Date("2026-02-01") // Format is YYYY/MM/DD
let createdDate3 = new Date("12-11-2026") // Format is MM/DD/YYYY
// console.log(createdDate2.toDateString());

 
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(date1.getTime();
// console.log(Math.floor(Date.now()/1000));

// console.log(date1.getDate());
// console.log(date1.getFullYear());
// console.log(date1.getMonth() + 1); // Month Starts With 0 For January

date1.toLocaleDateString('default', {
    weekday: "narrow"
})

console.log(date1);
