let result = 0;
const OPERATORS = ['clr', '%', 'neg', '/', '+', '-', '*', 'back', '='];

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
        case '/':
            return divide(a, b);
    }
};

const handleInput = function(e) {
    const value = e.target.dataset['value'];
    console.log(!OPERATORS.includes(value));
    if (!OPERATORS.includes(value)) {
        equation.textContent += value;
    }
};

const toggleMode = function(e) {
    const value = e.target.dataset['value'];
    if (value == 'dark') {
        e.target.innerHTML = '&#9790;';
        e.target.dataset['value'] = 'light';
        toggle.style['justify-content'] = 'flex-end';
    }
    else {
        e.target.innerHTML = '&#9728;';
        e.target.dataset['value'] = 'dark';
        toggle.style['justify-content'] = 'flex-start';
    }
}

const toggle = document.querySelector('.toggle');
const equation = document.querySelector('.equation');
const buttons = document.querySelectorAll('.calc-btn');
buttons.forEach(btn => {
    btn.addEventListener('click', handleInput);
});
const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', toggleMode);