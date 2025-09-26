function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    console.log(arr);
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  // return arr;
}
insertion([2, 1, 4, 7]);