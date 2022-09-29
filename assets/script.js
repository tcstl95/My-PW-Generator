// Assignment Code
var generateBtn = document.querySelector("#generate");
var capitalLetters = ["T", "D"];
var lowerLetters = ["g", "x"];
var numbers = ["2","6"];
var specialCharacters = ["!", "%"];
var answers = ["Tg2!","Tx2!", "Tx2%","Tg6!","Tg2%","Tg6%","Dg2!","Dg2%","Dx2!","Dx6!","Dx2%","Dx6%",];


// Write password to the #password input
function writePassword() {
 userChoice = window.prompt("Choose length of password. Must be between 8 and 128 characters");
 userChoice = window.prompt("Choose capital letter: T,D");
 userChoice = window.prompt("Choose lowercase letter: g, x" );
 userChoice = window.prompt("Choose a number: 2,6");
 userChoice = window.prompt("Choose a special character: !, %");

 
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
