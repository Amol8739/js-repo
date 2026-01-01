const accountId = 121212
// constants cannot be changed once Declared.

let accountEmail = "amol21@google.com"


var accountPassword = "12345"
/*
Variables can be changed in further code.
Prefer not to use var 
because of issue in block scope and funtional scope
*/


accountCity = "Daund"
// Variables can also be declared like this also. But this method is not prefered.

let accountState

//Lets try to make some change in its initial values.

// accountId = 21 //not allowed
accountEmail = "amol@google.com"  // Can be changed 
accountPassword = "54321"  // Can be changed
accountCity = "Pune" // Can be changed


console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);
//Instead of executing each and every variable you can use table to show in table format
