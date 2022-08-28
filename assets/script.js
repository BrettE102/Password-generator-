function gatherInfo() {

    var isValidLength = false;

    // checking if password is 8<128, if so proceed with prompts 
  
    while(!isValidLength) {
      length = prompt('How long would you like the password to be?');
      if(length <= 128 && length >= 8 ) {
        isValidLength = true;
      } else {
        alert("Password length must be between 8 and 128");
      }
    }
  
  
  
    upper = confirm('Would you like to include uppercase letters?');
    lower = confirm('Would you like to include lowercase letters?');
    number = confirm('WOuld ou like to include numbers?');
    symbol = confirm('Would you like  to include symbols?');
  
  }
  
  
  // functions to generate random num, sym, letter
  
  function getRandomLower() { 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  function getRandomUpper() { 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  
  function getRandomNumber() { 
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  
  function getRandomSymbol() { 
    const symbols = '!@#$%^&*(){}[]<>,.=+';
    return symbols [Math.floor(Math.random() * symbols.length)];
  }
  
  
  // created an array to call functions
  
  var functions = [
    getRandomLower,
    getRandomUpper,
    getRandomNumber,
    getRandomSymbol
  ];
  
  function RandomFunctionNumber() { 
    return Math.floor(Math.random() * functions.length);
  }
  
  
  function generatePassword(){

    var upperReg = /[A-Z]/;
    var lowerReg = /[a-z]/;
  
    var password = "";
    var ctr = 1;

    // checking/filtering out unwanted characters 
  
    while(ctr <= length){
     
      var char = functions[RandomFunctionNumber()]();
      if(upperReg.test(char)){
        if(upper){
          password += char;
          ctr++;
        }
      } else if(lowerReg.test(char)){
        if(lower){
          password += char;
          ctr++;
        }
      } else if(!isNaN(char)){
        if(number){
          password += char;
          ctr++;
        }
      } else {
        if(symbol){
          password += char;
          ctr++;
        }
      }
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
  
  }
  
  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  window.onload = gatherInfo;
  
  
  // 1. prompt user for password criteria
  //      A. password length 8 < 128
  //      B. lowercase, uppercase, numbers, special characters
  
  // 2. validate the input
  
  // 3. generate the actual password
  
  // 4. DONE display generated password to the page.