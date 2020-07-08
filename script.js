/*
    * Get extra buttons to work 
    * Do rules such as pressing operations twice 
    * Division by zero 
    * Add commas 
    * Center text  
*/


// Variables to keep track of entered values   
var operationType = null; 
var previousNumber = null; 
var operationSelected = false; 
var decimalSelected = false; 


///////////////////////////////////////// SETTING EVENT LISTENERS ////////////////////////////////////////////////

var buttonNumber = document.getElementsByClassName("btn-num"); // See why it does not work if change to query, collections? 

var clearDisplayBtn = document.querySelector("#clear-display").addEventListener('click', cleardisplay);

var calculatorOperations = document.getElementsByClassName("operation-btn");

var convertToNegativeNum = document.querySelector('#convert-negative').addEventListener('click', convertNegative);


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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Clears the calculator display 
function cleardisplay()
{
    const DEFAULT_NUMBER_DISPLAYED = "0";

    var display = document.querySelector("#display-value");

    display.textContent = DEFAULT_NUMBER_DISPLAYED;
    operationSelected = false; 
}

// resets the values that keep track of the current number and operation type 
function resetValues()
{
    var operationType = null; 
    var previousNumber = null; 
}


 /*
  Determiens the number clicked and calls the function to display the number 

  Arg: e  event object provided by the browser when a button is clicked  
 */

 function numberClicked(e)
 {
    e = e || window.event;  
    e = e.target || e.srcElement;

    console.log("Number: " + e.id + " clicked.")

    if (e.nodeName === 'BUTTON')
     {
         if(e.id ===".")
         {
            decimalSelected = true; 
         }
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

    console.log("type: " + operationType); 




    if (currentValue == DEFAULT_NUMBER_DISPLAYED )
    {
        display.textContent  = number;

    }else if (operationSelected)
    {
        previousNumber = display.textContent; 
        cleardisplay();
        display.textContent = number;
        operationSelected = false; 
        

    }else if(currentValue.length >= MAX_LENGTH)
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



function convertNegative()
{
    var display = document.querySelector("#display-value");
    var currentValue = display.textContent; 
    display.textContent = "-" + currentValue; 
}


/*
    Determines the operation clicked. 
    If the equality symbol is selected it displays the results. 
*/
function operationClicked(e)
{
    e = e || window.event;  
    e = e.target || e.srcElement;

    if (e.nodeName === 'BUTTON') 
    {
        operationSelected = true; 

        if (e.id === "equality") 
        {
            var display = document.querySelector("#display-value");
            var currentValue = display.textContent; 

            display.textContent = calculateResult(previousNumber, currentValue, operationType);
         
        }else
        {
            operationSelected = true; 
            operationType = e.id;
        }
    }
}



function calculateResult(prev_num, current_num, operation)
{
    // Determine which operation to preform 

    if(operation === "addition")
    {
        if(decimalSelected)
        {
            var result = parseFloat(prev_num) + parseFloat(current_num);
        }else
        {
            var result = parseInt(prev_num) + parseInt(current_num);
        }
        resetValues();

        return result;


    }else if(operation === "subtraction")
    {
        if(decimalSelected)
        {
            var result = parseFloat(prev_num) - parseFloat(current_num);
        }else
        {
            var result = parseInt(prev_num) - parseInt(current_num);
        }
        resetValues();

        return result;


    }else if(operation === "multiplication")
    {
        if(decimalSelected)
        {
            var result = parseFloat(prev_num) * parseFloat(current_num);
        }else
        {
            var result = parseInt(prev_num) * parseInt(current_num);
        }
        resetValues();

        return result;


    }else if(operation === "division")
    {
        if(decimalSelected)
        {
            var result = parseFloat(prev_num) / parseFloat(current_num);
        }else
        {
            var result = parseInt(prev_num) / parseInt(current_num);
        }
        resetValues();

        return result;

    }
}