var theGreetBtnElem = document.querySelector(".greetBtn");

// var theResetBtnElem = document.querySelector(".resetBtn");

var nameElem = document.querySelector(".name");

var dispalyElement = document.querySelector(".display");

var theCounterElement = document.querySelector(".counter"); 

var errorMsgElem = document.querySelector(".error-msg");

var theResetBtnElem = document.querySelector(".resetBtn");



var counter = 0;

var namesStore = [];

var forSave;

var instanceTheGreet = theGreeting();


function reset() {
  counter = 0;
  localStorage ['namesStore'] = counter;
  nameElem.innerHTML = "";
  dispalyElement.innerHTML = "";
  theCounterElement.innerHTML = counter;

  namesStore = [];

}

function  greetings(){
var radio = document.querySelector("input[name='language']:checked" );

if(radio) {
  // var lowerCaps = nameElem.toL

    instanceTheGreet.weStorenames(nameElem.value);
    theCounterElement.innerHTML = instanceTheGreet.theCounter();
    dispalyElement.innerHTML = instanceTheGreet.weGreetPeople(radio.value, nameElem.value);
    setTimeout(function(){  dispalyElement.innerHTML = ""}, 3000);
  
 }
 else if (nameElem.value === ""){
  errorMsgElem.innerHTML = "Name cannot be empty";
  setTimeout(function(){ errorMsgElem.innerHTML = ""}, 3000);
 }

 else if (radio && nameElem.value === ""){
  errorMsgElem.innerHTML = "Enter name and select the language";
  setTimeout(function(){ errorMsgElem.innerHTML = ""}, 3000);
 }

else if (!radio){
  errorMsgElem.innerHTML = "Please select the language";
  setTimeout(function(){ errorMsgElem.innerHTML = ""}, 3000);
}

var myNames = JSON.stringify(instanceTheGreet.getName());
localStorage.setItem('name', myNames);

nameElem.value = '';
}

function letsUncheck(){
  var radioBtn = document.querySelector("input[name='language']:checked" );
  radioBtn.checked = false;
}

theGreetBtnElem.addEventListener('click', greetings);
theGreetBtnElem.addEventListener('click', letsUncheck);
theResetBtnElem.addEventListener('click', reset);
