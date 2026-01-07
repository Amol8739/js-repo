const score = 199

const num = new Number(150)

// console.log(score);
// console.log(num);

// console.log(num.toString().length);
/*
- Using toString method Number is converted into String so you can 
  continue use the other String methods. 
*/
// console.log(num.toFixed(3));
// It is used to give decimal to a number and the 3 is for how many 0 you want after the decimal.

const num2 = 132.784545
// console.log(num2.toPrecision(5));
/* 
- It is used to get approximate value.
- The output is in String.
- Number is given to get approximate value upto that number 
  it include number before the decimals also.
*/

const num3 = 1065101
// console.log("This is US Standard Format of writing Numbers :",num3.toLocaleString());
// console.log("This is Indian Standard Format of writing Numbers :",num3.toLocaleString('en-In'));
/*
- It is used to represent number in Standard Formats using commas.
- By Default it is shown in US standard.
- To adjust commas as per Indian Sandard format write en-In in method.
*/

// ---------------------x---------------------x---------------------x---------------------x---------------------x---------------------x---------------------x

const num4 = 215.35
// console.log(Math);
// console.log(Math.abs(-2));
// console.log(Math.round(num4));
// console.log(Math.ceil(num4));
// console.log(Math.floor(5, 4, 6, 2 ,3));
// console.log(Math.min(5, 8 , 2, 6));
// console.log(Math.max(5, 8 , 2, 6));

// console.log(Math.random());
// Random Method will always Generate Random number between 0 to 1. 

// console.log(Math7.floor(Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min);
