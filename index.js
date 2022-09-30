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
const buttons = document.querySelectorAll('.calc-btn');
buttons.forEach(btn => {
    btn.addEventListener('click', handleInput);
});
const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', toggleMode);