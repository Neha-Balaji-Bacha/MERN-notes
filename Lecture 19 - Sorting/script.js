//sorting : Dta is arrangedbin a specific manner such that we can know & take decisions about data.
//EX : 1
//unstable sort
function sortno(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(sortno([4, 1, 3, 5, 7]));

//stable sorting : Equal ele maintains their relative order.
//Bubble sort : stable sorting

/*summary : In one apss : swap adj ele of  curr > next ele
after first pass,the gretest ele will be the last positon
after each pass , one ele will be placed it correct sorted position.
Refer optimization for not checking ele already placed @ their correct sorted position*/

//Best case : TC : O(N)
//worst case : O(N*N)
//Average TC : H.W
//SC : O(1)
function Bubble(arr){
 for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length-i-1; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(Bubble([4, 1, 3, 5, 7]));