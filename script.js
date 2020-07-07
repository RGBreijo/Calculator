/*
     TODO REMINDER: 
          Add commas 
          Only one . is allowed   
          only one opertion is allowed at a time     
*/


var buttonNumber = document.getElementsByClassName("btn-num"); // See why it does not work if change to query 

var clearDisplayBtn = document.querySelector("#clear-display").addEventListener('click', cleardisplay);

var calculatorOperations = document.getElementsByClassName("operation-btn");




// Sets event listeners for all the number buttons 
for (var i = 0; i < buttonNumber.length; i++) 
{
    buttonNumber[i].addEventListener('click' , numberClicked);
}




// Sets event listeners for all the operations 
for (var i = 0; i < calculatorOperations.length; i++) 
{
    calculatorOperations[i].addEventListener('click' , operationClicked) ; 
}



// Clears the calculator display 
function cleardisplay()
{
    const DEFAULT_NUMBER_DISPLAYED = "0";

    var display = document.querySelector("#display-value");
    display.textContent = DEFAULT_NUMBER_DISPLAYED;
}


 /*
  Determiens the value of the number button that was clicked and appends it to the display
  Arg: e  event informaiton when button is clicked  
 */

 function numberClicked(e)
 {
    e = e || window.event;
    e = e.target || e.srcElement;

    if (e.nodeName === 'BUTTON') {
            appendNumbersToDisplay(e.id);
    }
 }





/*
    Determines what the calculator should display 

    arg: number  Number user wants to be diplayed 
*/
function appendNumbersToDisplay(number)
{
    var display = document.querySelector("#display-value");
    var currentValue = display.textContent; 

    const MAX_LENGTH  = 11; 
    const DEFAULT_NUMBER_DISPLAYED = "0";


    if (currentValue == DEFAULT_NUMBER_DISPLAYED )
    {
        display.textContent  = number;

    } else if(currentValue.length >= MAX_LENGTH)
    {
        // DO NOTHING, MAX DISPLAYED LENGTH REACHED

    }else if(currentValue.length % 3 == 0){

            // TODO: FUNCTION TO PLACE COMMA 
        display.textContent = currentValue + number;

    }else
    {
        display.textContent = currentValue + number;
    }
}




/*
                    WORK IN PROGRESS    

    Series of function to be called once an operation is selected 

    - Once an operation is clicked keep track of the current number being displayed 
    - Keep track of the operation to be preformed 
    - Once a number is selected clear the screen 
    - Display the user number normally until the = operation is pushed 
    - Calculate (previousNumber   operation   newNumber) 
    - Display to screen 
*/

function operationClicked(e)
{
    const DIVISION = "/"; 
    const MULTIPLICATION = "x";  
    const ADDITION = "+"; 
    const SUBTRACTION = "-"; 

    var operationValue = e.path[0].value;

    console.log(operationValue);
}


