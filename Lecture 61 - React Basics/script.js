import { add } from "./calculator.js";
import { subtract } from "./calculator.js";
import { printString } from "./print.js";
// import printNumber  from "./print.js";

// printNumber("Sum", add(4, 5));
// printNumber("Sub", subtract(4, 5));
// printString("Hello");
import printNo  from "./print.js";

printNo("Sum", add(4, 5));
printNo("Sub", subtract(4, 5));

// axios.get("https://jsonplaceholder.typicode.com/todos/1")
// .then((result) => {
//  console.log(result);
// })
// .catch((err) => { 
//     console.log(err);
// })