const accountId = 1212
let accountEmail = "amol21@google.com"
var accountPassword = "12345"
accountCity = "Daund"
let accountState

// accountId = 21 //not allowed
accountEmail = "amol@google.com"
accountPassword = "2121"
accountCity = "Pune"

/*
Prefer not to use var 
because of issue in block scope and funtional scope
*/

console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

