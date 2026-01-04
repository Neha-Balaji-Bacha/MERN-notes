// window.addEventListener("scroll",()=>{
//     console.log("scrolled");
// })

function handleScroll(){
    console.log("scrolling throttled");
}

//Throttling using global variable

// let isAllowed = true;

// function throttle(delay){
//     if(!isAllowed) return;
//     handleScroll();
//     isAllowed = false;
//     setTimeout(()=>{
//         isAllowed = true;
//     },delay);
// }

// window.addEventListener("scroll",()=>{
//     throttle(1000);
// });

//Throttling implemented using closures
// function throttle(fn,delay){
//     let isAllowed =true;
//     return function(){
//         if(!isAllowed) return;
//         fn();
//         isAllowed = false;
//         setTimeout(()=>{
//             isAllowed = true;
//         },delay);
//     };
// }

// const throttleScroll = throttle(handleScroll,1000);
// window.addEventListener("Scroll",throttleScroll);


//using rest operator
function throttle(fn,delay){
    let isAllowed =true;
    return function(...args){
        if(!isAllowed) return;
        fn.apply(this,args);
        isAllowed = false;
        setTimeout(()=>{
            isAllowed = true;
        },delay);
    };
}
const throttleScroll = throttle(handleScroll,100);
window.addEventListener("scroll",throttleScroll);

//Debouncing
function debounce(fn, delay) {
  let timerId = null;

  return function (value) {
    clearTimeout(timerId);

    timerId = setTimeout(function () {
      fn(value);
    }, delay);
  };
}

function saveInput(value) {
  console.log(value);
}

const debouncedSave = debounce(saveInput, 2000);
const input = document.querySelector("input");
input.addEventListener("input", function () {
  debouncedSave(input.value);
});

//using rest operator
// function debounce(fn, delay) {
//   let timerId = null;
//   return function (...args) {
//     clearTimeout(timerId);

//     timerId = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// function saveInput(val) {
//   console.log(val);
// }

// const debounceSaveInput = debounce(saveInput, 2000);

// const input = document.querySelector("input");
// input.addEventListener("input", () => {
//   //   saveInput(input.value);
//   debounceSaveInput(input.value);
// });
