let energy = 100;
let gold = 0;
let timer;

document.getElementById('dog').addEventListener('click', () => {
    if (energy > 0) {
        let goldEarned = Math.floor(Math.random() * 10) + 1;
        gold += goldEarned;
        energy--;
        updateDisplay();
    }
});

document.getElementById('loadEnergy').addEventListener('click', () => {
    if (energy === 0) {
        startTimer();
    }
});

function updateDisplay() {
    document.getElementById('gold').textContent = gold;
    document.getElementById('energy').textContent = energy;
}

function startTimer() {
    let timeLeft = 60;
    document.getElementById('timer').classList.remove('hidden');
    document.getElementById('loadEnergy').classList.add('hidden');
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            energy = 100;
            document.getElementById('timer').classList.add('hidden');
            document.getElementById('loadEnergy').classList.remove('hidden');
            updateDisplay();
        } else {
            timeLeft--;
            document.getElementById('timer').textContent = formatTime(timeLeft);
        }
    }, 1000);
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

updateDisplay();
