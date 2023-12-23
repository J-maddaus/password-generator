// Assignment Code
var generateBtn = document.querySelector("#generate");

    function getPassword() {
    
    // Password variables for all available character options.
    var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    var numberSymbols = "0123456789"
    var symbols = "!@#$%^&*()-=+<>?/|':[]{}"
    var charactersSelected = "";
    var newPassword = "";

    //prompt asking user to select length of password
    var keyLength = prompt(
        "Please choose a password length between 8 and 128 characters long."
    );
    
    //prompt if the password length is below 8 characters or above 128 characters gives error message and ask user to try again
    if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
        alert("Invaild choice password length must be between  8 and 128 characters. Please try again.");        
        return;

    // these variables prompt the user to select what characters the would like to include. by selecting ok the characters are included and by selecting cancel they are excluded.
      } else {
    var upperCase = confirm("Click OK if you would like uppercase letters to be included. Click cancel if not.");
    var lowerCase = confirm("Click OK if you would like lowercase letters to be included. Click cancel if not.");
    var numbers = confirm("Click OK if you would like numbers to be included. Click cancel if not.");
    var symbolChar = confirm("Click OK if you would like symbols to be included. Click cancel if not.");
    }

    if (upperCase) {charactersSelected += upperCaseLetters;}
    if (lowerCase) {charactersSelected += lowerCaseLetters;}
    if (numbers) {charactersSelected += numberSymbols;}
    if (symbolChar) {charactersSelected += symbols;}
    if (upperCase === false && lowerCase === false && numbers === false && symbolChar === false) {
      alert (" Atleast one character type needs to be selected. Please try again")
    }

    for (i = 0; i < keyLength; i++) {

        newPassword += charactersSelected[Math.floor(Math.random() * charactersSelected.length)]
    }
    return(newPassword);
}

// Write password to the #password input.
    var passwordText = document.querySelector("#password");
    function writePassword(newPassword) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = newPassword;
}

// Add event listener to generate button.
    generateBtn.addEventListener("click", function () { writePassword(getPassword()) });

    