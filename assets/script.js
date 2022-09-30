// Assignment Code
var generateBtn = document.querySelector("#generate");
var capitalLetters = ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P"];
var lowerLetters = ["a","b","c", "d","e","f","g","h","i","j","k","l","m","n","o","p"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!", "%","*","$","&"];

var empArray = []
empArray.push(lowerLetters);
empArray.push(numbers);
empArray.push(specialCharacters);
empArray.push(capitalLetters);



// Write password to the #password input
function writePassword() {
var numChars= ("Choose length of password. Must be between 8 and 128 characters");
console.log(numChars);
window.prompt("Choose length of password. Must be between 8 and 128 characters");
var lowerCase= ("Do you want lowercase letters?");
console.log(lowerCase);
window.confirm("Do you want lowercase letters?");
var upperCase= ("Do you want uppercase letters?");
console.log(upperCase);
window.confirm("Do you want uppercase letters?");
var specialChar=("Do you want a special character?");
console.log(specialChar);
window.confirm("Do you want a special character?");


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("generate" , writePassword);
