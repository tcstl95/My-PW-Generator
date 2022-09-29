// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
   userChoice = window.prompt("Choose length of password. Between 8 - 128 characters.");
   userChoice = window.prompt("Now choose type. uppercase, lowercase, numeric, special characters");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);
