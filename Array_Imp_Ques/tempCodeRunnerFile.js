function maxSubarraysum(arr) {
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      console.log(arr[i]);
  }
}
}
maxSubarraysum([-1, 5, -3, 2, -1, 3]);