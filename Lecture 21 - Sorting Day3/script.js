//Quick sort : subquestion
//Question : Given an array ,place its last element at a position such that all smaller ele are left and all greater ele are in right.
//input : [2,1,7,5,4]
//output : [1,2,4,7,5] (if there are multiple ans ,print any of them).

function placeLastElem(arr) {
  let n = arr.length;
  let lastElem = arr[n - 1];
  let ind = 0; //index that's available to place elements <= lastElem

  for (let i = 0; i < n; i++) {
    if (arr[i] <= lastElem) {
      [arr[i], arr[ind]] = [arr[ind], arr[i]];
      ind++;
    }
  }

  return arr;
}

let arr1 = [2, 7, 6, 5, 4, 4];
console.log(placeLastElem(arr1));

//Quick sort
/*Best case :O(n log n)
 avg case : O(n log n)
 worst case : O(n²)
 SC : O(log n) */
function partition(arr, start, end) {
  let pivot = arr[end];
  let idx = start;

  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      [arr[idx], arr[j]] = [arr[j], arr[idx]];
      idx++;
    }
  }

  [arr[idx], arr[end]] = [arr[end], arr[idx]];
  return idx;
}
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIndex = partition(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}
let arr = [8, 6, 10, 5, 9, 2, 1, 15, 7];
console.log(quickSort(arr));
