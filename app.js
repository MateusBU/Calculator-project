function insertToDisplay(value){
    let specialCaracter = ['/', '+', '-', '*', '.'];
    let valueDisplay = document.getElementById("display").value;
    if(specialCaracter.includes(valueDisplay.slice(-1)) && ((specialCaracter.includes(value)) || (valueDisplay == ''))){
        return;
    }
    document.getElementById("display").value += value;
}

function calculate(){
    console.log("calculate");

    let expression = document.getElementById("display").value;
    let result;
    if(expression == 'Error'){
      eraseDisplay();
      return;
    }
    if(expression == ''){
      return;
    }
    try{
      console.log("try");
      result = eval(expression).toFixed(2);
    } 
    catch (error){
      console.log("error");
      result = "Error";
    }
  
    document.getElementById("display").value = result;
}

function eraseDisplay(){
    document.getElementById("display").value = '';
}

