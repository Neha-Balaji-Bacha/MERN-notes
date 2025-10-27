//Implement code of sorting ( TC - O(N), SC - O(N)) for both positive and negative numbers.

//sorting : Data is arrangedb  in a specific manner such that we can know & take decisions about data.
//EX : Selection sort
//TC (worst,Best): O(N*N), SC: O(1),unstable sort
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

/*summary : In one pass : swap adj ele of  curr > next ele
after first pass,the gretest ele will be the last positon
after each pass , one ele will be placed it correct sorted position.
Refer optimization for not checking ele already placed @ their correct sorted position*/

//Best case : TC : O(N)
//worst case : O(N*N)
//Average TC : H.W
//SC : O(1)
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break; // array already sorted
  }
  return arr;
}
