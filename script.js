// Assignment Code
var generateBtn = document.querySelector("#generate");



// create function for generatePassword

// prompt to get the number of characters in password
  // var numberOfCharacters = prompt("How many characters do you want")
  // numberOfCharacters = parseInt(numberOfCharacters)

// need 4 if's with 4 confirmExpressionconditionals

// processiog...

// outcomes of passwords
  // function generatePassword(){
  //   return "xxx";
  // }

// google how to randomly select integer (math random in zoom video)

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
