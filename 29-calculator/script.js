const MAX_DISPLAY_LENGTH = 13;

let display = document.querySelector('.display');
let leftOperand = null;
let operator = null;
let justPressedOperator = false;
let isShowingError = false;

let numberButtons = document.querySelectorAll('.number-button');
for (let button of numberButtons) {
    button.addEventListener('click', () => onNumberButtonPress(button.textContent));
}

document.querySelector('.ac-button').addEventListener('click', _ => clear());
document.querySelector('.back-button').addEventListener('click', _ => back());
document.querySelector('.equals-button').addEventListener('click', _ => equals());
document.querySelector('.decimal-button').addEventListener('click', _ => addDecimal());

document.querySelector('.add-button', '+').addEventListener('click', _ => onOperatorButtonPress('+'));
document.querySelector('.subtract-button', '-').addEventListener('click', _ => onOperatorButtonPress('-'));
document.querySelector('.multiply-button', '*').addEventListener('click', _ => onOperatorButtonPress('*'));
document.querySelector('.divide-button', '/').addEventListener('click', _ => onOperatorButtonPress('/'));
document.querySelector('.modulo-button', '%').addEventListener('click', _ => onOperatorButtonPress('%'));

function onNumberButtonPress(number) {
    clearErrorIfShowing();

    if (justPressedOperator) {
        leftOperand = display.textContent;
        display.textContent = '';
        justPressedOperator = false;
    }

    if (display.textContent.length >= MAX_DISPLAY_LENGTH) return;

    display.textContent += number;
}

function onOperatorButtonPress(pressedOperator) {
    clearErrorIfShowing();

    if (display.textContent.length === 0) return;

    if (pressedOperator === '%' && !Number.isInteger(+display.textContent)) {
        displayError('Non-integer');
        return;
    };

    if (leftOperand !== null) {
        equals();
    }
    operator = pressedOperator;
    justPressedOperator = true;
}

function clear() {
    leftOperand = null;
    operator = null;
    justPressedOperator = false;
    display.textContent = '';
    clearErrorIfShowing();
}

function back() {
    clearErrorIfShowing();
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
}

function equals() {
    console.log('Equals');
    switch (operator) {
        case '+':
            formatAndDisplay(+leftOperand + +display.textContent);
            break;
        case '-':
            formatAndDisplay(+leftOperand - +display.textContent);
            break;
        case '/':
            if (+display.textContent === 0) {
                displayError('Blackhole');
                break;
            }
            formatAndDisplay(+leftOperand / +display.textContent);
            break;
        case '*':
            formatAndDisplay(+leftOperand * +display.textContent);
            break;
        case '%':
            if (!Number.isInteger(+display.textContent)) {
                displayError('Non-integer');
                break;
            }
            formatAndDisplay(+leftOperand % +display.textContent);
            break;
    }

    leftOperand = null;
    operator = null;
}

function formatAndDisplay(number) {
    number = Math.round(number * 1000000000) / 1000000000;
    display.textContent = number.toString().slice(0, MAX_DISPLAY_LENGTH);
}

function displayError(message) {
    display.textContent = message;
    isShowingError = true;
}

function addDecimal() {
    clearErrorIfShowing();
    if (display.textContent.includes('.')) return;
    display.textContent += '.';
}

function registerOperatorButton(buttonQuerySelector, operator) {
    let button = document.querySelector(buttonQuerySelector);
    button.addEventListener('click', _ => onOperatorButtonPress(operator));
}

function clearErrorIfShowing() {
    if (isShowingError) {
        display.textContent = '';
        isShowingError = false;
    }
}