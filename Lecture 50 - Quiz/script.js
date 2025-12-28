class Question{
    constructor({id,text,options,correctOptions,type}){
        this.id= id;
        this.text=text;
        this.options=options;
        this.correctOptions=correctOptions;
        this.type=type;
    }
}
const questions = [
    new Question({id: 1,
    text: "Which of the following are JavaScript data types?",
    options: ["String", "Boolean", "all", "Undefined"],
    correctOptions: 2, 
    type:"single-select"
  }),
  new Question({
    id: 2,
    text: "JavaScript is a ___ language.",
    options: ["Compiled", "Interpreted", "Markup", "Styling"],
    correctOptions: 1,
    type: "single-select"
  }),
  new Question({
    id: 3,
    text: "Which method is used to store data in localStorage?",
    options: ["localStorage.save()", "localStorage.setItem()", "localStorage.store()", "localStorage.push()"],
    correctOptions: 1,
    type: "single-select"
  }),
  new Question({
    id: 4,
    text: "JSON stands for?",
    options: [
      "JavaScript Object Notation",
      "Java Source Object Network",
      "JavaScript Oriented Notation",
      "Java Serialized Object Name"
    ],
    correctOptions: 0,
    type: "single-select"
  }),
  new Question({
    id: 5,
    text: "Which of the following are valid JSON data types?",
    options: ["Object", "Number", "Function", "Boolean"],
    correctOptions: 0,
    type: "single-select"
  }),
  new Question({
    id: 6,
    text: "What does a closure in JavaScript allow?",
    options: [
      "Access to outer function variables",
      "Faster execution speed",
      "Automatic garbage collection",
      "Direct access to DOM"
    ],
    correctOptions: 0,
    type: "single-select"
  }),
  new Question({
    id: 7,
    text: "Which of the following are form validation methods?",
    options: [
      "required",
      "minlength",
      "maxlength",
      "autoSave"
    ],
    correctOptions: 0,
    type: "single-select"
  })
];
class Quiz{
    constructor({questions,duration}){
        this.questions=questions;
        this.duration=duration;
        this.userResponse={};
        this.score=0;
        this.currentQuestionIndex = 0;
        this.timer=null;
}
start(){
  this.startTimer();
  this.CurrentQuestion();
}
CurrentQuestion(){
    const idx = this.currentQuestionIndex;
    const questionTextElement = document.querySelector("p");
    questionTextElement.textContent = this.questions[idx].text;
    this.displayOptions(idx);
}
displayOptions(idx){
     const optionUl = document.querySelector("ul");
     const options = this.questions[idx].options;
     optionUl.innerHTML = options.map((option,index) =>
    `<li data-option-idx="${index}">${option}</li>`
     ).join("");
}
captureUserResponse(optionIdx){
    const qIdx =this.currentQuestionIndex;
    this.userResponse[qIdx] = optionIdx;
}
prevQuestion(){
 if(this.currentQuestionIndex == 0){
    return;
 }
 if(this.currentQuestionIndex==this.questions.length-1){
    const nextButton = document.querySelector(".buttons").lastElementChild;
    nextButton.textContent = "Next";
 }
 this.currentQuestionIndex--;
 this.CurrentQuestion();
}
nextQuestion(){
    if(this.currentQuestionIndex == this.questions.length-1){
      this.submit();
    return;
   }
    if(this.currentQuestionIndex==this.questions.length-2){
    const nextButton = document.querySelector(".buttons").lastElementChild;
    nextButton.textContent = "submit";
 }
   this.currentQuestionIndex++;
   this.CurrentQuestion();
}
calculateScore(){
  this.score = 0;

  for (let qIdx in this.userResponse) {
    const selectedOption = this.userResponse[qIdx];
    const correctOption = this.questions[qIdx].correctOptions;

    if (selectedOption === correctOption) {
      this.score++;
    }
  }
}
startTimer(){
    const timerElement = document.querySelector(".timer");
    let remainingTime = this.duration * 60;
    this.timer = setInterval(() => {
      remainingTime--;
      const hr = String(Math.floor(remainingTime/3600)).padStart(2,"0");
      const min = String(Math.floor((remainingTime/60)%60)).padStart(2,"0");
      const sec = String(Math.floor(remainingTime %60)).padStart(2,"0");
      timerElement.textContent = `${hr}:${min}:${sec}`;
      if(remainingTime <= 0){
        clearInterval(this.timer);
        alert("Quiz Submitted");
      }
    },1000);
}
submit(){
    this.calculateScore();
    clearInterval(this.timer);
    alert(`Your Score: ${this.score}/${this.questions.length}`); 
 }
};

const quiz = new Quiz({questions,duration:10});
quiz.start();
const options = document.querySelector(".options");
const prevButton = document.querySelector(".buttons").children[0];
const nextButton = document.querySelector(".buttons").children[1];

options.addEventListener("click", (e) =>{
    if(e.target.matches("li")){
       const optionIdx = Number(e.target.dataset.optionIdx);
       quiz.captureUserResponse(optionIdx);  
    }
});
prevButton.addEventListener("click", () =>{
     quiz.prevQuestion();
});
nextButton.addEventListener("click", () =>{
    quiz.nextQuestion();
    
});
