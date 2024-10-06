let currentInput = '0'; // Setăm inițial la '0'
let memoryValue = 0; // Valoarea memoriei

// Functie pentru a introduce cifre
function inputNumber(number) {
    if (currentInput === '0') {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

// Functie pentru a introduce operatii
function inputOperation(operator) {
    currentInput += ` ${operator} `;
    updateDisplay();
}

// Functie pentru a introduce punctul decimal
function inputDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

// Functie pentru a introduce paranteze
function inputParenthesis(parenthesis) {
    currentInput += parenthesis;
    updateDisplay();
}

// Functie pentru a introduce dublu zero
function inputDoubleZero() {
    // Verificăm dacă currentInput este diferit de '0'
    if (currentInput !== '0') {
        currentInput += '00';
    }
    updateDisplay();
}

// Functie pentru a introduce triplu zero
function inputTripleZero() {
    // Verificăm dacă currentInput este diferit de '0'
    if (currentInput !== '0') {
        currentInput += '000';
    }
    updateDisplay();
}

// Functie pentru a actualiza display-ul
function updateDisplay() {
    // Limita de 18 caractere
    const maxLength = 18;
    
    // Verificăm dacă currentInput depășește limita
    if (currentInput.length > maxLength) {
        currentInput = currentInput.substring(0, maxLength);
    }
    
    document.getElementById('display').innerText = currentInput;
}

// Functie pentru a sterge rezultatul
function deleteResult() {
    currentInput = '0';
    updateDisplay();
}

// Functie pentru a sterge continutul de pe display
function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

// Functie pentru a adauga valoare in memorie
function memoryAdd() {
    memoryValue += parseFloat(currentInput);
    currentInput = '0'; // Resetează currentInput după adăugare
    updateDisplay();
}

// Functie pentru a șterge valoarea din memorie
function memoryClear() {
    memoryValue = 0;
}

// Functie pentru a calcula rezultatul
function calculate() {
    try {
        let expression = prepareExpression(currentInput);
        let result = eval(expression);
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

// Functie pentru a calcula radicalul
function inputSquareRoot() {
    try {
        let result = Math.sqrt(parseFloat(currentInput));
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

// Functie pentru a obține valoarea din memorie
function getMemoryValue() {
    return memoryValue; // Returnează valoarea din memorie
}
