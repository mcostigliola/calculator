// Function sum
function sum(val1, val2){
    return val1 + val2;
}

// Function multiply
function multiply(val1, val2){
    return val1 * val2;
}

// Function div
function divide(val1, val2){
    return val1 / val2;
}

// Function sub
function sub(val1, val2){
    return val1 - val2;
}

function operate(key, num1, num2) {

    let results=0;
    let arrayNum = Array.from(num1);

    for(let i = 0; i < arrayNum.length; i++){

        if(arrayNum[i] == '+'){
            num1 = arrayNum.slice(0,arrayNum.indexOf('+')).toString().replace(/,/g, '');
            num2 = arrayNum.slice(arrayNum.indexOf('+') + 1, -1).toString().replace(/,/g,'');
        }else if(arrayNum[i] == '-'){
            num1 = arrayNum.slice(0,arrayNum.indexOf('-')).toString().replace(/,/g, '');
            num2 = arrayNum.slice(arrayNum.indexOf('-') + 1, -1).toString().replace(/,/g,'');
        }else if(arrayNum[i] == '*'){
            num1 = arrayNum.slice(0,arrayNum.indexOf('*')).toString().replace(/,/g, '');
            num2 = arrayNum.slice(arrayNum.indexOf('*') + 1, -1).toString().replace(/,/g,'');
        }else if(arrayNum[i] == '/'){
            num1 = arrayNum.slice(0,arrayNum.indexOf('/')).toString().replace(/,/g, '');
            num2 = arrayNum.slice(arrayNum.indexOf('/') + 1, -1).toString().replace(/,/g,'');
        }

    }
   

    switch(key) {
        case "+":
            console.log(sum(Number(num1),Number(num2)));
            results = sum(Number(num1),Number(num2));
            break;
        case "-":
            console.log(sub(Number(num1),Number(num2)));
            return sub(Number(num1),Number(num2));
            break;
        case "*":
            return multiply(Number(num1),Number(num2));
            break;
        case "/":
            return divide(Number(num1),Number(num2));
            break;
        default:
            console.log("Invalid operation");
            return null;
            break;
    }

    return results;
}



function updateDisplay(e){

    let opKey = Array.from(e.target.childNodes[0].data).toString();
    num1 += opKey;

    let display = document.querySelector('p');
    let result = document.createTextNode(opKey);
    display.appendChild(result);

    console.log(num1);
}

// Handle the operator div "button"
function handleOperator(e){

    let opKey = Array.from(e.target.childNodes[0].data).toString();       
    switch(opKey){
        case "+":
            display.innerText='';
            keys = '+';
            break;
        case "-":
            display.innerText='';
            keys = '-';
            break;
        case "*":
            display.innerText='';
            keys = '*';
            break;
        case "=":
            display.innerText='';
            let res = operate(keys, num1, num2);
            console.log(`risultato : ${res}`);

            // Render result on Display
            var para = document.createElement("p");
            var element = document.getElementById("display");
            element.appendChild(para);
            let renderResult = document.querySelector('p');
            let result = document.createTextNode(Number(res));
            renderResult.appendChild(result);
            break;


    }

    var para = document.createElement("p");
    var element = document.getElementById("display");
    element.appendChild(para);
    return opKey;

}

function clearDisplay(){
    let emptyText = '';
    let display = document.querySelector('p');
    let result = document.createTextNode(emptyText);
    display.appendChild(result);
    
    return true;
}

let num1 = '';
let num2 = '';
let keys = '';


// Add event listener on all div with class btn-key and operations
const key = Array.from(document.querySelectorAll('.btn-key'));
key.forEach(divs => divs.addEventListener('click', updateDisplay));

const operation = Array.from(document.querySelectorAll('.operations'));
operation.forEach(divs => divs.addEventListener('click', handleOperator));


