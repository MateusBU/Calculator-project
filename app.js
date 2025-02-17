function insertToDisplay(value){
    let specialCaracter = ['/', '+', '-', '*', '.'];
    let valueDisplay = document.getElementById("display").value;
    console.log(value);
    console.log(valueDisplay);
    console.log(valueDisplay.slice(-1));
    if(specialCaracter.includes(valueDisplay.slice(-1)) && (specialCaracter.includes(value) || (valueDisplay?.length == 0))){
        return;
    }
    document.getElementById("display").value += value;
}

function calculate(){
    console.log("calculate");

    let expression = document.getElementById("display").value;
    let result;
  
    try{
      result = eval(expression);
    } 
    catch (error){
      result = "Error";
    }
  
    document.getElementById("display").value = result;
}

function eraseDisplay(){
    document.getElementById("display").value = '';
}