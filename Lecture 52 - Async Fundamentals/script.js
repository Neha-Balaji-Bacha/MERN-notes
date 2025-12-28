class Question{
    constructor(){
        this.operators=["+","-","*","%","/","^"];
         this.op1=this.random(100);
         this.op2=this.random(100)
         this.operator=this.operators[this.random(6)-1]
         this.correctAns =this.calculateCorrect();
         this.score = this.random(30);
    }
    random(high){
      return 1 + Math.floor(Math.random() * high);
    }
    display(){
        return questionText.textContent = `${this.op1} ${this.operator} ${this.op2}`;
    }
    validateAnswer(answer){
        return this.correctAns === Number(answer) ? this.score: 0;
    }
    calculateCorrect(){
      switch(this.operator){
        case "+": return this.op1 + this.op2;
        case "-": return this.op1 - this.op2;
        case "*": return this.op1 * this.op2;
        case "^": return this.op1 ** this.op2;
        case "/": return this.op1 / this.op2;
        case "%": return this.op1 % this.op2;
        default:alert("alert");
      }
    }
}
const question = new Question();
console.log(question);

class Quiz{
    constructor(){
      this.timer = this.random(40);
      this.question = new Question();
      this.questionCount = 1;
      this.score = 0;

    }
    displayCurrentQuestion(){
        this.question.display();
    }
     random(high){
      return 1 + Math.floor(Math.random() * high);
    }
    nextQuestion(currentQuestionAns){
        this.score += this.question.validateAnswer(currentQuestionAns);
        this.question = new Question();
        this.displayCurrentQuestion();
    }
    getScore(){
        return this.score;
    }
}
const questionText = document.querySelector("#questionText");
const ansInput = document.querySelector("#answerInput");
const que = document.querySelector(".question");
const score = document.querySelector("span");
const quiz = new Quiz();
quiz.displayCurrentQuestion();
ansInput.addEventListener("keydown",(e) => {
    if(e.key === "Enter"){
    e.preventDefault();
    quiz.nextQuestion(Number(ansInput.value));
    ansInput.value="";
    score.textContent=quiz.getScore();
    }
});

