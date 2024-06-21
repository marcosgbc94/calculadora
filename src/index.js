import './styles.css';
import { add } from '@add';
import { subtract } from '@subtract';
import { multiply } from '@multiply';
import { divide } from '@divide';
import { getValidElement } from '@getValidElement';
import { catchErrors } from '@catchErrors';

let RUNNING = true;
let display = null;
let clearButton = null;
let equalButton = null;
let numbers = null;
let operations = null;

window.addEventListener('load', () => {
    if (RUNNING) {
        display = getValidElement('display');
        if (!display) {
            RUNNING = false;
            catchErrors('Hubo un problema al mostrar la calculadora. (ERROR 001)');
        }
    }
    
    if (RUNNING) {
        clearButton = getValidElement('clear');
        if (!clearButton) {
            RUNNING = false;
            catchErrors('Hubo un problema al mostrar la calculadora. (ERROR 002)');
        }
    }
    
    if (RUNNING) {
        equalButton = getValidElement('equal');
        if (!equalButton) {
            RUNNING = false;
            catchErrors('Hubo un problema al mostrar la calculadora. (ERROR 003)');
        }
    }
    
    if (RUNNING) {
        numbers = getValidElement('.number', true);
        if (!numbers) {
            RUNNING = false;
            catchErrors('Hubo un problema al mostrar la calculadora. (ERROR 004)');
        }
    }
    
    if (RUNNING) {
        operations = getValidElement('.operation', true);
        if (!operations) {
            RUNNING = false;
            catchErrors('Hubo un problema al mostrar la calculadora. (ERROR 005)');
        }
    }
    
    let currentOperation = null;
    let operand1 = null;
    let operand2 = null;
    
    if (RUNNING) {
        numbers.forEach(number => {
            number.addEventListener('click', () => {
                if (currentOperation === null) {
                    operand1 = operand1 === null ? number.value : operand1 + number.value;
                    display.textContent = operand1;
                } else {
                    operand2 = operand2 === null ? number.value : operand2 + number.value;
                    display.textContent = operand2;
                }
            });
        });
    }
    
    if (RUNNING) {
        operations.forEach(operation => {
            operation.addEventListener('click', () => {
                if (operand1 !== null && operand2 !== null) {
                    calculateResult();
                }
                currentOperation = operation.value;
            });
        });
    }
    
    if (RUNNING) {
        clearButton.addEventListener('click', () => {
            clean();
        });
    }
    
    if (RUNNING) {
        equalButton.addEventListener('click', () => {
            if (operand1 !== null && operand2 !== null && currentOperation !== null) {
                calculateResult();
            }
        });
    }
    
    const clean = () => {
        operand1 = null;
        operand2 = null;
        currentOperation = null;
        display.textContent = '0';
    }
    
    const calculateResult = () => {
        let result = 0;
        switch (currentOperation) {
            case '+':
                result = add(parseFloat(operand1), parseFloat(operand2));
                break;
            case '-':
                result = subtract(parseFloat(operand1), parseFloat(operand2));
                break;
            case '*':
                result = multiply(parseFloat(operand1), parseFloat(operand2));
                break;
            case '/':
                result = divide(parseFloat(operand1), parseFloat(operand2));
                break;
            default:
                break;
        }
        display.textContent = result;
        operand1 = result.toString();
        operand2 = null;
        currentOperation = null;
    }
});
