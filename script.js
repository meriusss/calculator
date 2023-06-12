let resultDisplay = document.getElementById("result");
let currentTime = document.getElementById("current-time");
let operationDisplay = document.getElementById("operation-display");
let operators = document.querySelectorAll(".operator, .operator1");
let numbers = document.querySelectorAll(".number");
let equals = document.querySelector(".equals");
let acpm = document.querySelectorAll(".acpm");
let dot = document.getElementById("dot");
let numberArray = [];
let currentOperator = "";
let firstOperand = "";
let secondOperand = "";
let result;
let dotCount = 0;


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
        currentTime.innerHTML = today.getHours() + ":" + today.getMinutes();
    }, 1000);
};

function updateResultDisplay(number) {
    resultDisplay.innerHTML = number;
};

function updateOperationDisplay(){
    operationDisplay.innerHTML = String(secondOperand) + String(currentOperator) + String(firstOperand);
};

function getNumber(){
    numbers.forEach(number => {
        number.addEventListener('click', (e)=>{
            numberArray.push(number.value);
            firstOperand = numberArray.join("");
            updateResultDisplay(firstOperand);
            updateOperationDisplay();
            console.log(firstOperand);
        })
        
    });
};

function addDot(){
        numberArray.push(".");
        firstOperand = numberArray.join("");
        updateOperationDisplay(firstOperand);
        updateResultDisplay(firstOperand);
        dotCount++;
};

dot.addEventListener('click', (e)=> {
    if (dotCount < 1){
        addDot();
    }
});

equals.addEventListener('click', (e)=>{
    let result = operate(parseFloat(firstOperand),parseFloat(secondOperand),currentOperator);
    updateResultDisplay(result + "=");
    firstOperand = result;
    dotCount--;
})

operators.forEach(operator => {
    operator.addEventListener('click', (e)=>{
        currentOperator = operator.value;
        secondOperand = firstOperand;
        firstOperand = "";
        numberArray = [];
        dotCount--;
        updateOperationDisplay();
    })
});

acpm.forEach(element => {
    element.addEventListener('click', (e)=>{
        if (element.value == "AC"){
            firstOperand = "";
            secondOperand = "";
            numberArray = [];
            currentOperator = "";
            dotCount--;
            updateOperationDisplay("");
            updateResultDisplay("");
        }
        else if (element.value == "+/-"){
            firstOperand = firstOperand * -1;
            updateOperationDisplay(firstOperand);
            updateResultDisplay(firstOperand);
        }
    })
    
});

getNumber();
getCurrentTime();
