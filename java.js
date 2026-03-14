let display = document.getElementById("display");
let history = document.getElementById("history");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
    history.innerText = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function percentage() {
    try {
        display.value = parseFloat(display.value) / 100;
    } catch {
        showError();
    }
}

function square() {
    try {
        display.value = Math.pow(parseFloat(display.value), 2);
    } catch {
        showError();
    }
}

function sqrt() {
    try {
        display.value = Math.sqrt(parseFloat(display.value));
    } catch {
        showError();
    }
}

function calculate() {
    try {
        history.innerText = display.value;
        display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch {
        showError();
    }
}

function showError() {
    display.value = "Error";
    setTimeout(() => display.value = "", 1000);
}


document.addEventListener("keydown", function(event) {
    if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
        appendValue(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});