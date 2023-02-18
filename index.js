const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let rangeslider = document.getElementById("sliderRange");
let output = document.getElementById("demo");
output.innerHTML = "Length: "+ rangeslider.value + " characters";

rangeslider.oninput = function() {
  output.innerHTML = "Length: "+ this.value + " characters";
}


let passwordOneEl = document.querySelector("#password-one")
let passwordTwoEl = document.querySelector("#password-two")

function generatePassword() {
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""
    for ( let i = 0 ; i < rangeslider.value ; i++){
    let randomOne = Math.floor ( Math.random ()* characters.length)
    let randomTwo = Math.floor ( Math.random ()* characters.length)
    passwordOneEl.textContent += characters[randomOne]
    passwordTwoEl.textContent += characters[randomTwo]
    }
}

function copy() {
    
  var copyText = document.getElementsByClassName("password");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}