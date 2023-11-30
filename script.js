// Función para limpiar la pantalla (C)
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Función para eliminar el último carácter (DEL)
function deleteLastCharacter() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

// Función para añadir un carácter al display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Función para realizar el cálculo
function calculate() {
    let displayValue = document.getElementById('display').value;
    let result;

    try {
        result = eval(displayValue); // Utilizando la función eval para evaluar la expresión
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
