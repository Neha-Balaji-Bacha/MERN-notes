// console.log("Neha");
// const arr = new Array("2");
// console.log(arr);

// const teams = ["CSK","RCB","SRH","KKR","GT"];
// let place = teams.indexOf("GT");
// teams[place] = "LSG";
// console.log(teams);


const teams = ["CSK","RCB","SRH","KKR","GT"];
//indexof function
// teams.pop();
// teams.push("LSG");
// console.log(teams);

//includes function
// console.log(teams.includes("SRH"));
// console.log(teams.includes("SRK"));

// const oldteam = "GT";
// const newteam = "RR";

// if(teams.includes(oldteam)){
//     let index = teams.indexOf(oldteam);
//     teams[index]=newteam;
// }
// console.log(teams);

//concat function 
// const otherTeams1 = ["LSG","RR","MI"];
// const otherTeams2 = ["LSG1","RR1","MI1"];
// console.log(teams.concat(otherTeams1,otherTeams2));


//Task ncr
// let num = 5
// let fact = 1;
// for(let i=1;i<=num;i++){
//   fact = fact*i;
// }
// console.log(fact);


// function factorial(num){
//     let fact = 1;
//   for(let i=1;i<=num;i++){
//    fact = fact*i;
//   }
// return fact;
// }
// function combination(n,r){
//     let result = factorial(n)/(factorial(n-r) * factorial(r));
//     return result
// }
// let arr = [4,10,6,8];
// let finalarr = [];
// for(let i=0;i<arr.length;i++){
//     finalarr.push(combination(arr[i],2));
// }
// console.log(finalarr);


//avg till 6 decimal

// function average(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     let avg = sum / arr.length;
//     return avg.toFixed(6); 
// }

// let arr = [4, 8, 3, 5];
// console.log(average(arr));
