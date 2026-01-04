// function test() {
//   return Promise.resolve(90);
// }
//Equivalent to:
async function test() {
  return 10;
}

console.log(test()); // Promise


function getProducts() {
  const res = fetch("https://dummyjson.com/products");
  console.log(res);//not a actual data
  const data = res.json();//res.json() itself is asynchronous and also returns a Promise, so both steps must be awaited.(take a time). so it occurs error.
  console.log({data});
}

getProducts();


// console.log("start");
// let count = 0;
// const id = setInterval(() => {
//  if(count>=5){
//   clearInterval(id);
// }
// else{
//     count++;
//      console.log("delay");
// }
// },1000);

// console.log("end");

// setTimeout(() => {
//   console.log("First");
//   setTimeout(() => {
//     console.log("Second");
//   }, 1000);
// }, 1000);

// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }



let sec = 0;
let min=0;
let hour= 0;
const id = setInterval(()=>{
  sec++;
  if(sec===60){
    sec = 0;
    min++;
  }
  if(min===60){
    min=0;
    hour++;
  }
  if(hour===24){
    hour=0;
  }
  console.clear();
  console.log(
  hour.toString().padStart(2, "0") + ":" +
    min.toString().padStart(2, "0") + ":" +
    sec.toString().padStart(2, "0"));
},1000)

const clockId = setInterval(() => {
  const now = new Date();

  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  console.clear();
  console.log(
    hour.toString().padStart(2, "0") + ":" +
    min.toString().padStart(2, "0") + ":" +
    sec.toString().padStart(2, "0")
  );
}, 1000);

const  auto = document.createElement("input");
document.body.appendChild(auto);
const item = "type";
function getelement(){
   auto.value = localStorage.getItem("item")|| "";
}
function setelement(){
  localStorage.setItem("item",auto.value);
}
getelement();
const autoid = setInterval(()=>{
  setelement();
},7000);

// Digital clock
// Countdown timer
// Quiz timer
// Auto-save feature
// Notification system
// Traffic light simulator
// Typing animation
// Session timeout

// Suggested Practice Projects

// _*Callbacks & Callback Hell*_
// File processing simulator
// Multi-step form handler
// Sequential API caller
// Data validation pipeline
// User registration flow
// Order processing system
// Animation sequence

// _*Promises*_
// Promise-based timer utilities
// Login system using Promises
// Data fetcher with loading, success, and error states
// Image preloader
// Sequential task runner
// Retry mechanism for failed operations
// Caching system using Promises

// These are some suggested projects from our previous two classes. Try to give at least some of them a go—it will really help reinforce what you’ve learned!

let success = false;
function delay(ms){
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      if(success){
        resolve("pass");
      }else{
        reject("failed");
      }
    },ms);
  })
}
delay(1000)
.then((result)=>{
  console.log(result);
})
.catch((result)=>{
  console.log(result);
});




new Promise((resolve)=>{
  resolve(10);
})
.then((value)=>{
  return value*2;
})
.then((value)=>{
  return value+5;
})
.then((final)=>{
  console.log(final);
})
.catch((err)=>{
  console.log(err);
})

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    return response.json();   // converts to JS object
  })
  .then((data) => {
    console.log(data.title);
  })
  .catch((error) => {
    console.log("Error:", error);
  });


new Promise((resolve)=>{
  resolve(10);
})
.then((value)=>{
  throw new Error("this is invalid");
})
.catch((err)=>{
  console.log(err);
})
.finally(()=>{
  console.log("always executes");
})


fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.title);
  })
  .catch((error) => {
    console.log("Handled:", error.message);
  });

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json()),
  fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json())
])
.then(([todo, user]) => {
  console.log(todo.title);
  console.log(user.name);
})
.catch((error) => {
  console.log("Error:", error);
});

async function code() {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 1000);
  });

  return result;
}

code().then((value) => {
  console.log(value);
});


async function codeNew() {
  try {
    await new Promise((_, reject) => {
      reject("Failed");
    });
  } catch (error) {
    console.log("Error handled");
  }
}


async function codeNew(success) {
  try {
    const result = await new Promise((resolve, reject) => {
      if (success) {
        resolve("Resolved");
      } else {
        reject("Rejected");
      }
    });

    console.log("Success:", result);

  } catch (error) {
    console.log("Error handled:", error);
  }
}
codeNew(true);



function delay(value, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}

async function run() {
  const first = await delay("First", 1000);
  console.log(first);

  const second = await delay("Second", 1000);
  console.log(second);

  const third = await delay("Third", 1000);
  console.log(third);
}

run();



function delay(value, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}

async function run() {
const first = await Promise.all([delay("First", 1000),
delay("second", 1000),
delay("third", 1000)]);
  console.log(first);
}

run();

fetch(url)
.Promise(()=>{

})

async function geToDo(){
  try{
    const response= await fetch(  "https://jsonplaceholder.typicode.com/todos/1");
    if(!response.ok)
      throw new Error(response.status)
    const data = await response.json();
    console.log(data.title);
  }
  catch{
    console.log("error");
  }
}
geToDo();


async function geToDo(){
  try{
    const response= await fetch(  "https://jsonplaceholder.typicode.com/todos/1",
    {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        title:"hello",
        body:"this is a text post",
        userId:1
      })
    }
  );
    if(!response.ok)
      throw new Error(response.status)
    const data = await response.json();
    console.log(data.title);
  }
  catch{
    console.log("error");
  }
}
geToDo();

//task1
function getNo(val){
  return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(val);
      },1000)
  });
}
getNo(5).then((result) => {console.log(result)});

//task 2
function out(){
  return new Promise((_,reject)=>{
    reject("invalid data");
  })
}
out().
then(() => {console.log("correct")})
.catch(() => {console.log("error")});

//task 3
new Promise((resolve) => {
 return resolve(10);
})
.then((val)=>{
  return val*2;
})
.then((val)=>{
  return val-5
})
.then((result)=>{
  console.log(result);
})

//task 4
function handle(){
  return new Promise((resolve)=>{
    resolve("start");
  }
  )}
handle()
.then(()=>{
  throw new Error("failed");
})
.catch((err) => {
  console.log(err.message);
})

//task 6
function solved() {
  const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("A"), 1000);
  });

  const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("B"), 1000);
  });

  const p3 = new Promise((resolve) => {
    setTimeout(() => resolve("C"), 1000);
  });

  return Promise.all([p1, p2, p3]);
}

solved().then((result) => {
  console.log(result);
});

//task 7
fetch("url").then((res) => {
  if(!res.ok){
    throw new Error("failed");
  }
  return res.json();
})
.then((data) => {
  console.log(data.title);
})
.catch((error)=> {
  console.log(error);
})

//task 8
function reload() {
  const p1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
  const p2 = fetch("https://jsonplaceholder.typicode.com/users/1");

  return Promise.all([p1, p2])
    .then((responses) => {
      return Promise.all([
        responses[0].json(),
        responses[1].json()
      ]);
    });
}

reload().then(([todo, user]) => {
  console.log(todo.title);
  console.log(user.name);
});

//task 9
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    if (!res.ok) {
      throw new Error("User fetch failed");
    }
    return res.json();
  })
  .then((user) => {
    console.log("User name:", user.name);

    return fetch("https://jsonplaceholder.typicode.com/todos/1");
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error("Todo fetch failed");
    }
    return res.json();
  })
  .then((todo) => {
    console.log("Todo title:", todo.title);
  })
  .catch((error) => {
    console.log("Error handled:", error.message);
  });

//task 10
  fetch("https://wrongurl.typicode.com/data")
  .then((res) => {
    if (!res.ok) {
      throw new Error("HTTP Error");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("Network error occurred");
  });


  async function resolveTask() {
  try {
    const result = await Promise.resolve("Success");
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

resolveTask();
