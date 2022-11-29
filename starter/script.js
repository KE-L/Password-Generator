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
var password =[];
var passwordLength = 12;
var lowerCasedCharactersChoice = false;
var upperCasedCharactersChoice = false;
var numericCharactersChoice = false;
var specialCharactersChoice = false;;

// Function to prompt user for password options
function getPasswordOptions() {
passwordLength = prompt("How long would you like your password? Please select between 10 - 64 characters")
  console.log(passwordLength);
lowerCasedCharactersChoice = confirm("Would you like a lower case character?")
  console.log(lowerCasedCharactersChoice);
upperCasedCharactersChoice = confirm("Would you like to select a upper case character?")
  console.log(upperCasedCharactersChoice);
numericCharactersChoice = confirm("Would you like to select a numeric character?")
  console.log(numericCharactersChoice);
specialCharactersChoice = confirm("Would you like to select a special character?");
  console.log(specialCharactersChoice);
  generatePassword()
}
getPasswordOptions()
choices ()


// Function for getting a random element from an array
function choices () {
if (userLowerCase){
  
}
}
// map function select random numbers from array? 
// contact & select from array 
// function getRandom(arr) {
// var randomChoice = arr[Math.floor(Math.random() * arr.length)]
// }

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }

// Function to generate password with user input
// store object containing password 
function generatePassword() {
if (lowerCasedCharactersChoice = true) {getRandom(lowerCasedCharacters)};
if (upperCasedCharactersChoice = true) {getRandom(upperCasedCharacters)};
if (numericCharactersChoice = true) {getRandom(numericCharacters)};
if (specialCharactersChoice = true) {getRandom(specialCharacters) };
}

// else prompt();





// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);