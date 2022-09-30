// Assignment Code
var generateBtn = document.querySelector("#generate");
var capitalLetters = ["T", "D"];
var lowerLetters = ["g", "x"];
var numbers = ["2","6"];
var specialCharacters = ["!", "%"];
var password = ["Tg1!", ""]



// Write password to the #password input
function writePassword() {
 userChoice = window.prompt("Choose length of password. Must be between 8 and 128 characters");
 userChoice = window.prompt("Do you want Capital letters?");
 userChoice = window.prompt("Do you want lowercase letters?" );
 userChoice = window.prompt("Do you want a number?");
 userChoice = window.prompt("Do you want a special character?");


var index = Math.floor(Math.random()* answers.length);
computerChoice = answers[index];

window.alert("Here is your password " + computerChoice); 


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

