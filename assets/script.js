// Assignment Code
var generateBtn = document.querySelector("#generate");
var capitalLetters = ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P"];
var lowerLetters = ["a","b","c", "d","e","f","g","h","i","j","k","l","m","n","o","p"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!", "%","*","$","&"];




// Write password to the #password input
function writePassword() {


var password = generatePassword();
var passwordText = document.querySelector("#password");

 
  passwordText.value = password;


}

function generatePassword(){
    empArray=[];
    result = prompt("How many characters? Between 8 and 128");
    if(isNaN(result) || result < 8 || result > 128){
        alert("Must have 8 to 128 characters!");
        return false
    }
    if (confirm("Do you want numbers? ")){
        empArray= empArray.concat(numbers);
    }
    if(confirm("Do you want lowercase letters?")){
        empArray= empArray.concat(lowerLetters);
    }
    if (confirm("Do you want uppercase letters?")){
        empArray= empArray.concat(capitalLetters);
    }
    if (confirm("Do you want special characters?")){
        empArray= empArray.concat(specialCharacters);
    
    }
    console.log(empArray);
    return true
    }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

