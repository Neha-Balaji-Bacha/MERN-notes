let arr1 = ["123", "45432"];

console.log(arr1.length); // 2   (2 elements in the array)
console.log(arr1[0].length); // 3   ("123" has 3 characters)
console.log(arr1[1].length); // 5   ("45432" has 5 characters)

let nums = [123, 45432];

console.log(nums.length); // 2  (2 elements)
console.log(nums[0].length); // undefined  (because 123 is a number)
console.log(nums[1].length); // undefined  (because 45432 is a number)
