let numberButton = document.querySelectorAll(".number");
let resultDisplay = document.getElementById("result");
let numbersArray = [];
let resultNumber;

function getNumberValue(){
    numberButton.forEach(button => {
        button.addEventListener('click', (e)=>{
            numbersArray.push(button.value);
            resultNumber = numbersArray.join("")
            resultDisplay.innerHTML = resultNumber;
            return button.value;
        })
    });
};

getNumberValue();

