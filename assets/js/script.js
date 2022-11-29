// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Introduce variables linked to specification prompts 
var pLength = 0;
var lowerChar = false; 
var upperChar = false; 
var numChar = false;
var specChar = false;
var passArr = [];
var password = "";

// Function to prompt user for password options
function getPasswordOptions() {
  var userChoseLength = prompt(
    "How long do you want your password to be? 10-64"
  );
  pLength = userChoseLength;
  var isLower = confirm("Do you want lowercase?");
  lowerChar = isLower;
  var isUpper = confirm("Do you want UPPERCASE?");
  upperChar = isUpper;
  var isNumbers = confirm("Do you want numbers?");
  numChar = isNumbers;
  var isSpecial = confirm("Do you want special characters?");
  specChar = isSpecial;

}
getPasswordOptions();
choices();

function choices() {
  if (lowerChar) {

    passArr.push(lowerCasedCharacters);
  }
  if (upperChar) {
    passArr.push(upperCasedCharacters);
  }
  if (specChar) {
    passArr.push(specialCharacters);
  }
  if (numChar) {
    passArr.push(numericCharacters);
  }


}
choices();
// Function for getting a random element from an array

let passwordStr = passArr.toString().replaceAll(",", "").trim();


// Function to generate password with user input
function generatePassword() {
  for (var i = 0; i < pLength; i++) {
    var randomNum = Math.floor(Math.random() * passwordStr.length);
    password += passwordStr.substring(randomNum, randomNum + 1);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  if (passwordText.value) {
    generateBtn.disabled = true;
  }
  if (pLength < 10 || pLength > 64) {
    generateBtn.disabled = true;
    alert("Select between 10 - 64 characters");
    passwordText.value = null;
  }
  if (!lowerChar && !upperChar && !specChar && !numChar) {
    generateBtn.disabled = true;
    alert("Select at least one character type");
  }
}

// Add event listener to generate button
// Displays password to screen 
generateBtn.addEventListener("click", writePassword);
