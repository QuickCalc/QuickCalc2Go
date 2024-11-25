let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let history = [];

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ` ${operator} `;
}

function clearDisplay() {
    display.value = '';
}

function undo() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
        addHistory(display.value);  // Hesaplama sonrası geçmişe ekle
    } catch {
        display.value = 'Error';
    }
}

function addHistory(result) {
    let historyItem = document.createElement('li');
    historyItem.textContent = result;
    historyList.appendChild(historyItem);

    // Geçmiş listesinde fazla öğe olursa 10 taneyi geçmesin
    if (historyList.children.length > 10) {
        historyList.removeChild(historyList.children[0]);
    }
}
