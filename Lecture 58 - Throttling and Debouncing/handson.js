function debounce(fn,delay){
    let timerId = null;
    return function(value){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn(value);
        },delay);
    };
}

function autoSave(text){
    localStorage.setItem("text",text);
    console.log("auto-saved",JSON.stringify(text));
}
const textarea = document.querySelector("textarea");

const savedText = localStorage.getItem("text");

if (savedText !== null) {
    textarea.value = savedText;
  }
 const debouncedAutoSave = debounce(autoSave, 2000);

  textarea.addEventListener("input", () => {
    debouncedAutoSave(textarea.value);
});