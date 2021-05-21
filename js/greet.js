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
  localStorage ['name'] = "";
  namesStore = [];
  nameElem.innerHTML = "";
  dispalyElement.innerHTML = "";
  theCounterElement.innerHTML = counter;
  // localStorage.clear('name');
  window.location.reload();
  

}

function  greetings(){
var radio = document.querySelector("input[name='language']:checked" );

if(radio) {
   if(nameElem.value == ""){
    document.querySelector(".forName").style.color = "red";
    setTimeout(function(){ 
      document.querySelector(".forName").style.color = "black"
    }, 3000);
    // document.querySelector(".forName").style.color = "black";
    return;
   }

    instanceTheGreet.weStorenames(nameElem.value);
    theCounterElement.innerHTML = instanceTheGreet.theCounter();
    dispalyElement.innerHTML = instanceTheGreet.weGreetPeople(radio.value, nameElem.value);
    setTimeout(function(){  dispalyElement.innerHTML = ""}, 10000);
  
 }
 else if (!radio && nameElem.value === ""){
  // errorMsgElem.innerHTML = "Please enter name* and select the language*";
  document.querySelector(".errorM").style.color = "red";
  setTimeout(function(){ 
  document.querySelector(".errorM").style.color = "black"
}, 3000);
 }

//  else if (radio && nameElem.value === ""){
//   // errorMsgElem.innerHTML = "Enter name and select the language";
//   document.querySelector(".error").style.color = "red"
//   setTimeout(function(){ errorMsgElem.innerHTML = ""}, 3000);
//  }

else if (!radio){
  document.querySelector(".errRbtn").style.color = "red";
  setTimeout(function(){ 
    document.querySelector(".errRbtn").style.color = "black"
  }, 3000);
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
