// Assignment Code

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var symbolSelect = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "\\",
  "^",
  "_",
  "{",
  "}",
  "|",
  "~",
  '"',
];
var pStorage = [];

var finalPassword = [];
//have a prompt for special characters that can be used
function startPassword() {
  alert("Password generator time!");
  var passwordLength = 0;
  do {
    passwordLength = prompt("Your password must be between 8-128 characters");
  } while (passwordLength < 8 || passwordLength > 128);
  continuePassword("special characters", symbolSelect);
  continuePassword("uppercase characters", lowerCase);
  continuePassword("lowercase characters", upperCase);
  continuePassword("numbers?", num);
  grabRandomElement();
  typeof "grabRandomElement";
  // invoke grabrandomelement correctly
  // convert final password into string
  // look into concat array for grabrandele
  return finalPassword;
}

function continuePassword(type, arr) {
  var selectionConfirm = confirm("How about some " + type + " added in?");

  if (selectionConfirm == true) {
    for (var i of arr) {
      pStorage.push(i);
    }
    return;
  }
  return;
}

function grabRandomElement(x) {
  for (var i = 0; i < x; i++) {
    randomValue = pStorage[Math.floor(Math.random() * pStorage.length)];
    finalPassword.push(randomValue);
  }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = startPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
