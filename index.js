const OPERATORS = ['clr', '%', 'neg', '÷', '+', '-', 'x', 'back', '='];

let currentResult = null;
let numberBuild = '';
let a = 0;
let b = 0;
let operator = '';
let sign = 1;

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    if (b == 0) {
        return undefined;
    }
    return a / b;
};

const operate = function(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
};

const handleInput = function(e) {
    const value = e.target.dataset['value'];
    if (!OPERATORS.includes(value)) {
        if (operator == '' && numberBuild == '' || result.textContent == 'undefined') clear();
        if (result.textContent != '0') result.textContent += value;
        else result.textContent = value;
        numberBuild += value;
    }
    else if (value == '=') {
        handleCalculation();
    }
    else if (OPERATORS.slice(3,7).includes(value)) {
        if (result.textContent == 'undefined') {
            clear();
        }
        if (currentResult == null) {
            shift();
        }
        else {
            a = b;
            b = currentResult;
        }
        result.textContent += value;
        if (operator != '') {
            handleCalculation();
        }
        operator = value;
    }
    else if (value == 'clr') {
        clear();
    }
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("op = " + operator);
    console.log("numberBuild = " + numberBuild);
    console.log(currentResult);
};

const shift = function() {
    a = b;
    b = +numberBuild;
    numberBuild = '';
}

const handleCalculation = function() {
    if (numberBuild != '') {
        shift();
    }

    if (operator != '') {
        currentResult = operate(operator, a, b);
        equation.innerHTML += `<br>${a} ${operator} ${b} = ${currentResult}`;
        a = b;
        b = currentResult;
        
    }
    else {
        currentResult = b;
        equation.innerHTML += `<br>${b} = ${currentResult}`;
        a, b = currentResult;
    }
    if (currentResult == undefined) {
        a = 0;
        b = 0;
        operator = '';
        numberBuild = '';
        result.textContent = 'undefined';
    }
    else {
        result.textContent = currentResult;
    }
    operator = '';
}

const clear = function() {
    currentResult = null;
    a = 0;
    b = 0;
    operator = '';
    numberBuild = '';

    result.textContent = '0';
    equation.innerHTML = '';
}

const toggleSign = function() {
    sign *= -1;
}

const toggleMode = function(e) {
    const elem = e.target.classList.contains('toggle-btn') ? e.target : e.target.parentElement;
    const value = elem.dataset['value'];
    if (value == 'dark') {
        elem.innerHTML = '<i class="fa-regular fa-moon"></i>';
        elem.dataset['value'] = 'light';
        elem.style['translate'] = '100%';
    }
    else {
        elem.innerHTML = '<i class="fa-regular fa-sun"></i>';
        elem.dataset['value'] = 'dark';
        elem.style['translate'] = '0';
    }
    container.classList.toggle('light');
}

const container = document.querySelector('.container');
const equation = document.querySelector('.equation');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.calc-btn');
buttons.forEach(btn => {
    btn.addEventListener('click', handleInput);
});
const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', toggleMode);