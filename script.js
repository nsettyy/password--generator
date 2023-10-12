// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];
var specialCharacters = ["!", "@", "#", "$", "%", "&"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var choiceArray = []

function generatePassword() {

  //saves the typed in password lengeth as a integer
  var length = parseInt(window.prompt ("Please choose the length of your password. Must be atleast 8 characters and no longer than 128 charcters."));
  if (length >= 8 && length <= 128 ) {
    //runs the function again is a number is typed in that is lower than 8 or greater than 128
  } else { window.alert ("Please choose a charcter length greater than 8 characters and less than 128 charcters.") 
  return generatePassword();
  } 

  //adds uppercase characters to password if "OK" is clicked
  if (confirm("Would you like your password to have uppercase characters?")) {
    choiceArray = choiceArray.concat(uppercase);
  }

  //adds lowercase characters to password if "Ok" is clicked
  if (confirm("Would you like your password to have lowercase characters?")) {
    choiceArray = choiceArray.concat(lowercase);
  }

  //adds numbers to password if "OK" is clicked
  if (confirm("Would you like your password to have numbers?")) {
    choiceArray = choiceArray.concat(numbers);
  }

  //adds special characters to password if "OK" is cliced
  if (confirm("Would you like your password to have special characters?")) {
    choiceArray = choiceArray.concat(specialCharacters);
  }
  
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }

  return password;
}

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
