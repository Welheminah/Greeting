function theGreeting(){

var nameStore = [];



function weGreetPeople(language, name){

    if(language === "english"){
        return "Hello "  + name;

    }else if(language === "setswana"){
        return  "Dumela " + name;
        
      
    }else if(language === "isiXhosa"){
        return  "Molo " + name;
        
  
    };
    
}

function theCounter(){
    return nameStore.length;
}


function weStorenames(ourName){
    
    var naming = ourName.charAt(0).toUpperCase();
    var named = ourName.toLowerCase().slice(1);
    var name = naming + named;
    if(!nameStore.includes(name)){
        if (name === ""){
            return;
        }
        nameStore.push(name)     
   }
   else{
    return name;
   }
}

function getName(){
    return nameStore
}

function theName(){
    return name
}


return {
    weGreetPeople,
    weStorenames,
    theCounter,
    getName,
    theName
}

}