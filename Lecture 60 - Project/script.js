const form = document.querySelector(".form");
const duration = document.querySelector("#duration");
const breaks = document.querySelector("#break");
const cycle = document.querySelector("#cycles");
const start = document.querySelector("#btn");

const dueError = document.querySelector("#durationerr");
const breakError = document.querySelector("#breakerr");
const cycleError = document.querySelector("#cycleserr");

const dashBoard = document.querySelector(".dashboard");
const phase = document.querySelector("#phase");
const timer = document.querySelector("#timer");
const noOfCycle = document.querySelector("#noOfCycle");
const pauseBtn = document.querySelector("#pause");
const quote = document.querySelector(".quote");

function validation() {
    let valid = true;
    if (duration.value === "") {
        dueError.textContent = "";
        valid = false;
    } else if (Number(duration.value) < 5) {
        dueError.textContent = "Minimum 5 minutes";
        valid = false;
    } else {
        dueError.textContent = "";
    }

    if (breaks.value === "") {
        breakError.textContent = "";
        valid = false;
    } else if (Number(breaks.value) < 2) {
        breakError.textContent = "Minimum 2 minutes";
        valid = false;
    } else {
        breakError.textContent = "";
    }

    if (cycle.value === "") {
        cycleError.textContent = "";
        valid = false;
    } else if (Number(cycle.value) < 1) {
        cycleError.textContent = "Minimum 1 cycle";
        valid = false;
    } else {
        cycleError.textContent = "";
    }

    start.disabled = !valid;
}

document.querySelectorAll("input").forEach(element => {
    element.addEventListener("input", validation);
})

let currentPhase = "study";
let cycleCount = 1;
let timerId;
let timeLeft;

start.addEventListener("click", (e) => {
    e.preventDefault();
    form.style.display = "none";
    dashBoard.style.display = "block";
    currentPhase = "study";
    cycleCount = 1;
    timeLeft = duration.value * 60;

    fetchQuote();
    updateUI();
    startTimer();
    startAutoSave();

    isPaused = false;
    pauseBtn.textContent = "Pause";
});
function startTimer() {
    clearInterval(timerId);
    timerId = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            handleSwitch();   
        } else {
            updateUI();       
        }
    }, 1000);
}

function handleSwitch() {
    if (currentPhase === "study") {
        if (cycleCount === Number(Cycle.value)) {
            clearInterval(timerId);
            phase.textContent = "Session Complete";
            timer.textContent = "00:00";
            noOfCycle.textContent = "";
            quote.textContent = "";
            return;
        }

        currentPhase = "break";
        timeLeft = Number(breaks.value) * 60;
        quote.textContent = "";
    } else {
        cycleCount++;
        currentPhase = "study";
        timeLeft = Number(duration.value) * 60;
        fetchQuote();
    }

    updateUI(); 
}

function updateUI() {
    phase.textContent = currentPhase == "study" ? ">>> Studying <<<" : ">>> Break time <<<";

    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;

    timer.textContent = String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");

    noOfCycle.textContent = `Cycle ${cycleCount} of ${cycle.value}`;
}

let isPaused = false;
pauseBtn.addEventListener("click", () => {
    if (!isPaused) {
        clearInterval(timerId);
        isPaused = true;
        pauseBtn.textContent = "Resume";
    } else {
        startTimer();
        isPaused = false;
        pauseBtn.textContent = "Pause";
    }
});

async function fetchQuote() {
  quote.textContent = "Loading quote...";

  try {
    const res = await fetch("https://random-quotes-freeapi.vercel.app/api/random");
    const data = await res.json();
    quote.textContent = `"${data.quote}" — ${data.author}`;
  } catch (err) {
    quote.textContent = "You can do it..!! ";
  }
}

function saveProgress() {
  const sessionData = {
    currentPhase,
    timeLeft,
    cycleCount,
    duration: duration.value,
    breakTime: breaks.value,
    cycles: cycle.value
  };

  localStorage.setItem("focusFlowSession", JSON.stringify(sessionData));
}
let saveInterval;

function startAutoSave(fn, delay) {
  let timerId = null;
  return function (...args) {
    clearTimeout(timerId);

    timerId = setInterval(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function debounce() {
  clearInterval(saveInterval);
  interval = interval(saveProgress, 1000);
}

const input = document.querySelector("input");
input.addEventListener("input", () => {
  startAutoSave(input.value);
});


