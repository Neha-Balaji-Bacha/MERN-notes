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