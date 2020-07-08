
// Variables to keep track of entered values   
var operationType = null; 
var previousNumber = null; 

var operationSelected = false; 
var decimalSelected = false; 
var percentageSelected = false;

var display = document.querySelector("#display-value");

///////////////////////////////////////// SETTING EVENT LISTENERS ////////////////////////////////////////////////

var buttonNumber = document.getElementsByClassName("btn-num"); 

var clearDisplayBtn = document.querySelector("#clear-display").addEventListener('click', cleardisplay);

var calculatorOperations = document.getElementsByClassName("operation-btn");

var convertToNegativeNum = document.querySelector('#convert-negative').addEventListener('click', convertNegative);

var convertToPercentage = document.querySelector('#percentage').addEventListener('click', convertToPercentage);

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

    display.textContent = DEFAULT_NUMBER_DISPLAYED;
    operationSelected = false; 
}

 /*
  Determiens the number clicked and calls the function to display the number 

  Arg: e  event object provided by the browser when a button is clicked  
 */

 function numberClicked(e)
 {
    e = e || window.event;  
    e = e.target || e.srcElement;


    if (e.nodeName === 'BUTTON')
     {
         if(e.id === ".")
         {
             if(decimalSelected)
             {
                // DO NOTHING MULTIPLE DECIMALS SELECTED
            
             }else
             {
                decimalSelected = true; 
                appendNumbersToDisplay(e.id);
             }

         }else
         {
            appendNumbersToDisplay(e.id);
         }
    }
 }



/*
    Determines what the calculator should display 

    arg: number  Number user wants to be diplayed 
*/
function appendNumbersToDisplay(number)
{

    var currentValue = display.textContent; 
    const MAX_LENGTH  = 9; 
    const DEFAULT_NUMBER_DISPLAYED = "0";



    if (currentValue == DEFAULT_NUMBER_DISPLAYED )
    {
        display.textContent  = number;

    }else if (operationSelected)
    {
        previousNumber = display.textContent; 

        cleardisplay();
        display.textContent = number;
        operationSelected = false; 
        decimalSelected = false; 
        

    }else if(currentValue.length >= MAX_LENGTH)
    {
        // DO NOTHING, MAX DISPLAYED LENGTH REACHED

    }else
    {
        display.textContent = currentValue + number;
    }
}


// Converts the user number to a negative number
function convertNegative()
{
    var currentValue = display.textContent; 
    display.textContent = "-" + currentValue; 
}


/*
Converts the user number into a percentage
Percentage is taken by dividng the value by 100 
    Example 
    25%
    25 ÷ 100 = 0.25.
    
*/ 
function convertToPercentage()
{
    var currentValue = display.textContent; 
    display.textContent = currentValue / 100; 
    decimalSelected = true; 
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
            var currentValue = display.textContent; 
            display.textContent = calculateResult(previousNumber, currentValue, operationType);
            decimalSelected = false; 
         
        }else
        {
            operationSelected = true; 
            operationType = e.id;
        }
    }
}


/*
    Calculates the results of the operation 
    prev_num        First number user typed  
    current_num     Second number user typed 
    operation       Operation to be preformed 
*/

function calculateResult(prev_num, current_num, operation)
{

    if(operation === "addition")
    {
        if(decimalSelected)
        {
            var result = (parseFloat(prev_num) + parseFloat(current_num));
    
        }else
        {
            var result = parseInt(prev_num) + parseInt(current_num);
        }

        result = Number(result.toFixed(5)); 
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

        result = Number(result.toFixed(5)); 
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

        result = Number(result.toFixed(5)); 
        return result;


    }else if(operation === "division")
    {   
        if(current_num === "0") 
        {
            return "Error";
        }

        if(decimalSelected)
        {
            var result = parseFloat(prev_num) / parseFloat(current_num);
        }else
        {
            var result = parseInt(prev_num) / parseInt(current_num);
        }
        result = Number(result.toFixed(5)); 
        return result;
    }
}
