// Assignment Code
var generateBtn = document.querySelector("#generate");
function getPassword (){
  //variables for all possible charaters in the password
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "012345679";
  var symbols = "!@#$%^&*()-=+<>?/\|':{}[]";
  var charSelected = "";
  var passLength = "";

  var passLength = prompt(
    "Please choose how long you'd like your password to be between 8 and 128 characters."
  );

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert (" Your password must be have a length between 8 and 128 charaters. Please try again.");
    return;
    
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
