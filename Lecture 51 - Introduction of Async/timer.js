const box2 = document.querySelector(".box2");
const btn = document.querySelector("#start");
const p = document.querySelector("#text");
const timerElement = document.querySelector("#timer");

class Validate {
  constructor(duration) {
    this.duration = duration;
    this.intervalId = null;
    this.errorShown = false;
  }

  normalize(text) {
    return text
      .split(" ")
      .filter(word => word !== "")
      .join(" ")
      .trim();
  }

  timer() {
    btn.addEventListener("click", () => {
      clearInterval(this.intervalId);
      this.errorShown = false;

      let remainingTime = this.duration * 60;
      box2.value = "";
      box2.disabled = false;

      const originalText = this.normalize(p.textContent);

      this.intervalId = setInterval(() => {
        remainingTime--;

        const hr = String(Math.floor(remainingTime / 3600)).padStart(2, "0");
        const min = String(Math.floor((remainingTime / 60) % 60)).padStart(2, "0");
        const sec = String(remainingTime % 60).padStart(2, "0");

        timerElement.textContent = `${hr}:${min}:${sec}`;

        if (remainingTime <= 0) {
          clearInterval(this.intervalId);
          box2.disabled = true;
          alert("Time Over");
        }
      }, 1000);

      box2.addEventListener("input", () => {
        const typedText = this.normalize(box2.value);

        if (!originalText.startsWith(typedText)) {

          box2.value = box2.value.slice(0, -1);

          if (!this.errorShown) {
            alert("Wrong character typed!");
            this.errorShown = true;
          }
          return;
        }


        this.errorShown = false;

        if (typedText === originalText) {
          clearInterval(this.intervalId);
          box2.disabled = true;
          alert("Typing Completed");
        }
      });
    });
  }
}

const validate = new Validate(2);
validate.timer();
