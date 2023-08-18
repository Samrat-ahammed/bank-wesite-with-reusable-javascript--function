function getInputValue (inputId){
const inputField = document.getElementById(inputId);
     const inputValue = inputField.value;
     const inputValueInt = parseFloat(inputValue);
     inputField.value = '';
      return inputValueInt;
}
function elementValueGet(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
   return elementValue;
}

function setTextElementValueById(elementId, newValue){
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}







