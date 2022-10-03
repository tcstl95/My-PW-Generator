// Assignment Code
var generateBtn = document.querySelector("#generate");
var capitalLetters = ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q", "R","S","T", "U","V", "W","X","Y","Z"];
var lowerLetters = ["a","b","c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!", "%","*","$","&"];
var pickChoices;
var passwordArray =[];




// Write password to the #password input
function writePassword() {
    

var password = generatePassword();
var passwordText = document.querySelector("#password");

 
  passwordText.value = password;


}

function generatePassword(){
   var empArray=[];
    var result = parseInt(prompt("How many characters? Between 8 and 128"));
    console.log (result);
    console.log (typeof(result));
    if(isNaN(result) || result < 8 || result > 128){
        alert("Must have 8 to 128 characters!");
        return;
    }
    if (confirm("Do you want numbers? ")){
        empArray= empArray.concat(numbers);
        console.log (empArray);
    }
    if(confirm("Do you want lowercase letters?")){
        empArray= empArray.concat(lowerLetters);
        console.log (empArray);
    }
    if (confirm("Do you want uppercase letters?")){
        empArray= empArray.concat(capitalLetters);
        console.log (empArray);
    }
    if (confirm("Do you want special characters?")){
        empArray= empArray.concat(specialCharacters);
        console.log (empArray);
    }
    
        for (var i=0; i <result; i++){
            var pickChoices =empArray[Math.floor(Math.random()* empArray.length)];
            passwordArray.push(pickChoices);
        }
        return passwordArray.join("")
    

   
    
    }
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

