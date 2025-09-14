let arr4 = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];

//find intersection & union
let arr5 = [1, 2, 4, 5, 6],
  arr6 = [2, 5, 6, 3, 1, 3];

//intersection : 1,2,5,6
//union : 1,2,3,4,5,6

const unionSet = new Set([...arr5, ...arr6]);
const unionArr = [...unionSet];
console.log({ unionArr });

//intersection
let intersection = [];
let arr4Set = new Set(arr4);
for (let i = 0; i < arr5.length; i++) {
  if (arr4Set.has(arr5[i]));
  intersection.push(arr5[i]);
}
intersection = [...new Set(intersection)];
console.log({ intersection });