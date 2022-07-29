let count = 0;

function incrementClick() {
    if(count < 10)
    updateDisplay(++count)
}

function resetCounter() {
    if(count > 0)
    updateDisplay(--count)
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}
