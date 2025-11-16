const questions = [
  {
    title: "1 nisi sit numquam, blanditiis repellendus laboriosam illo",
    option: [
      "nisi sit numquam",
      "nisi sit numquam",
      "nisi sit numquam",
      "nisi sit numquam",
    ],
    correctoption: 1,
  },
  {
    title: "2 nisi sit numquam, blanditiis repellendus laboriosam illo",
    option: [
      "nisi sit numquam",
      "nisi sit numquam",
      "nisi sit numquam",
      "nisi sit numquam",
    ],
    correctoption: 2,
  },
  {
    title: "3 nisi sit numquam, blanditiis repellendus laboriosam illo",
    option: [
      "nisi sit numquam",
      "nisi sit numquam",
      "nisi sit numquam",
      "nisi sit numquam",
    ],
    correctoption: 3,
  },
  {
    title: "4 nisi sit numquam, blanditiis repellendus laboriosam illo",
    option: [
      "nisi sit numquam",
      "nisi sit numquam",
      "nisi sit numquam",
      "nisi sit numquam",
    ],
    correctoption: 4,
  },
  {
    title: "5 nisi sit numquam, blanditiis repellendus laboriosam illo",
    option: [
      "nisi sit numquam",
      "nisi sit numquam",
      "nisi sit numquam",
      "nisi sit numquam",
    ],
    correctoption: 5,
  },
];

let currquesidx = 0;
let score = 0;
const correctoption = 2;
const wrongAns = -1;

const questionSection = document.querySelector(".quiz");

const questiontitle = document.querySelector(".question-title");

const option1 = document.querySelector(".option-1");
const option2 = document.querySelector(".option-2");
const option3 = document.querySelector(".option-3");
const option4 = document.querySelector(".option-4");

const nextbtn = document.querySelector(".next");
const scoreSection = document.querySelector(".score");

function changescore(optionNo) {
  if (questions[currquesidx].correctoption == optionNo) {
    score += correctoption;
  } else {
    score += wrongAns;
  }
}

function changequestion() {
  if (currquesidx == questions.length - 1) {
    questionSection.style.display = "none";
    scoreSection.style.display = "block"; //Makes hidden part visible
    scoreSection.textContent = "final score" + score; //final score
  }
  currquesidx++;

  const q = questions[currquesidx];

  questiontitle.textContent = q.title;
  option1.textContent = q.option[0];
  option2.textContent = q.option[1];
  option3.textContent = q.option[2];
  option4.textContent = q.option[3];
}
nextbtn.addEventListener("click", changequestion);

option1.addEventListener("click", () => {
  changescore(1);
  changequestion();
});

option2.addEventListener("click", () => {
  changescore(2);
  changequestion();
});
option3.addEventListener("click", () => {
  changescore(3);
  changequestion();
});
option4.addEventListener("click", () => {
  changescore(4);
  changequestion();
});
