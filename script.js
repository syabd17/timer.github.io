// script.js

let countdown;
let timerDisplay = document.getElementById('timerDisplay');
let timerInput = document.getElementById('timerInput');

function startTimer() {
    clearInterval(countdown);

    const minutes = parseInt(timerInput.value);

    if (isNaN(minutes) || minutes <= 0) {
        alert('Please enter a valid positive number of minutes.');
        return;
    }

    const seconds = minutes * 60;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(seconds);
        seconds--;
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}
