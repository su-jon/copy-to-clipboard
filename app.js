/*
// selecting DOM
const input = document.getElementById('input')
const copyButton = document.getElementById('copy-button');

copyButton.onclick = function() {
  input.select();
  document.execCommand('copy');
  alert("Copied!")
}
*/




// selecting DOM
let input = document.querySelector('#input');
let copyButton = document.querySelector('#copy-button');

// function 
let myFun = () => {
  input.select();
  document.execCommand('copy');
  alert('Copied!')
}

// add event listener 
copyButton.addEventListener('click', myFun)