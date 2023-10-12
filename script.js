// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("button clicked");

  var length = window.prompt ("Please choose the length of your password. Must be atleast 8 characters and no longer than 128 charcters.");
  length = parseInt(length);
  if (length >= 8 && length <= 128 ) {
  } else { window.alert ("Please choose a charcter length greater than 8 characters and less than 128 charcters.") 
  return generatePassword();
  } 

  var uppercase = window.confirm ("Would you like your password to contain uppercase characters?");
  if (uppercase) {
    //add uppercase characters
  } else if (!uppercase) {
    //don't add uppercase character
  }
   
  

  var lowercase = window.confirm ("Woudl you like your password to contain lowercase characters?");


  var numbers = window.confirm ("Woudl you like your password to contain numbers?");


  var specialCharacters = window.confirm ("Would you like your password to contain special characters");

  return "undefined";
}

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
