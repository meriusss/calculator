let resultDisplay = document.getElementById("result");
let currentTime = document.getElementById("current-time");
let operationDisplay = document.getElementById("operation-display");
let operators = document.querySelectorAll(".operator, .operator1");
let numbers = document.querySelectorAll(".number");
let equals = document.querySelector(".equals");
let acpm = document.querySelectorAll(".acpm");
let dot = document.getElementById("dot");
let currentOperator = "";
let firstOperand = "";
let secondOperand = "";
let lastOperator;
let result;


function add(number1,number2){
    let result = number1 + number2;
    return result;
};

function subtract(number1,number2){
    let result = number2 - number1;
    return result;
};

function multiply(number1,number2){
    let result = number1 * number2;
    return result;
};

function divide(number1,number2){
    let result = number2 / number1;
    if (number1 == 0){
        return "undefined";
    }
    return result;
};

function modulo(number1, number2){
    let result = number2 % number1;
    return result;
};

function operate(number1,number2,operator){
    if (operator == "+"){
        return add(number1,number2);
    }
    else if (operator == "-"){
        return subtract(number1,number2);
    }
    else if (operator == "x"){
        return multiply(number1,number2);
    }
    else if (operator == "÷"){
        return divide(number1,number2);
    }
    else if (operator == "%"){
        return modulo(number1,number2);
    }
};



function getCurrentTime(){
    setInterval(function(){
        var today = new Date();
        currentTime.textContent = today.getHours() + ":" + today.getMinutes();
    }, 1000);
};

function updateResultDisplay(number) {
    resultDisplay.textContent = number;
};

function updateOperationDisplay(){
    operationDisplay.innerHTML = String(secondOperand) + String(currentOperator) + String(firstOperand);
};

function getNumber(){
    numbers.forEach(number => {
        number.addEventListener('click', (e)=>{
            firstOperand = firstOperand + number.value;
            updateResultDisplay(firstOperand);
            updateOperationDisplay();
            console.log(firstOperand);
        })
        
    });
};

function addDot(){
        firstOperand = firstOperand + ".";
        updateOperationDisplay();
        updateResultDisplay(firstOperand);
};

dot.addEventListener('click', (e)=> {
    if (!firstOperand.includes(".") && firstOperand != ""){
        addDot();
    }
});

equals.addEventListener('click', (e)=>{
    if (firstOperand != "" && secondOperand != ""){
        let result = operate(parseFloat(firstOperand),parseFloat(secondOperand),currentOperator);
        updateResultDisplay("=" + result);
        secondOperand = result;
        firstOperand = "";
    };
    
});

operators.forEach(operator => {
    operator.addEventListener('click', (e)=>{
        currentOperator = operator.value;
        if (secondOperand == ""){
            secondOperand = firstOperand;
            firstOperand = "";
            updateOperationDisplay();
        }

        else {
            if (firstOperand == ""){
                currentOperator = operator.value;
                updateOperationDisplay();
            }
            else {
                let result = operate(parseFloat(firstOperand),parseFloat(secondOperand),lastOperator);
                secondOperand = result;
                firstOperand = "";
                updateOperationDisplay();
            }
            
        }
        lastOperator = currentOperator;
    })
});

acpm.forEach(element => {
    element.addEventListener('click', (e)=>{
        if (element.value == "AC"){
            firstOperand = "";
            secondOperand = "";
            currentOperator = "";
            updateOperationDisplay();
            updateResultDisplay("");
        }
        else if (element.value == "+/-"){
            if (firstOperand != ""){
                firstOperand = firstOperand * -1;
                updateOperationDisplay();
                updateResultDisplay(firstOperand);
            }
            else {
                secondOperand = secondOperand * -1;
                updateOperationDisplay();
                updateResultDisplay(secondOperand);
            }
            
        }
    })
    
});

getNumber();
getCurrentTime();
