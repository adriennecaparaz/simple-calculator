const OPERATORS = ['clr', '%', 'neg', '÷', '+', '-', '*', 'back', '='];

let currentResult = 0;
let numberBuild = '';
let a = 0;
let b = 0;
let operator = '';

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
    return a / b;
};

const operate = function(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
};

const handleInput = function(e) {
    const value = e.target.dataset['value'];
    if (!OPERATORS.includes(value)) {
        if (result.textContent != '0') result.textContent += value;
        else result.textContent = value;
        numberBuild += value;
    }
    else if (value == '=') {
        shift();
        handleCalculation();
    }
    else if (OPERATORS.slice(3,7).includes(value)) {
        b = +numberBuild;
        numberBuild = '';
        result.textContent += value;
        if (operator != '') {
            a = b;
            b = +numberBuild;
            equation.textContent = result.textContent;
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
};

const shift = function() {
    a = b;
    b = +numberBuild;
    numberBuild = '';
}

const handleCalculation = function() {
    currentResult = operate(operator, a, b);
    a = b;
    b = currentResult;
    result.textContent = currentResult;
    operator = '';
}

const clear = function() {
    currentResult = 0;
    a = 0;
    b = 0;
    operator = '';
    numberBuild = '';

    result.textContent = '0';
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