const btn = document.querySelector("button");
const span = document.querySelector("span");
btn.addEventListener("click",(e) => {
    e.preventDefault();
    span.textContent = "welcome to class";
    setTimeout(() => {
     span.remove();
     //span.textContent = "";
    },100);
});
//all listeners are async in behaviour
//also async : fetch,settime,setinterval
console.log("hello");//non-blocking
//alert("warning");//blocking
console.log("Neha");//non-blocking

const startButton = document.querySelector("button:nth-of-type(2)");
const stopButton = document.querySelector("button:last-of-type");
const h1Ele = document.querySelector("h1");
let count = 0;
let timer = null;
startButton.addEventListener("click",() => {
    timer = setInterval(() => {
        count++;
        h1Ele.textContent = count;
    },1000);
});
stopButton.addEventListener("click",() =>{
    console.log(timer);
    clearInterval(timer);
})
//HW : setInterval