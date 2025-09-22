let fre = new Array(256);
let fre1 = new Array(256);
function sortno(arr) {
  for (let i = 0; i < arr.length; i++) {
    if(fre[arr[i]] > 0){
      fre[i]++;
    }
    if(fre1[arr[i]]<0){
      fre1[i]++;
    }
  }
  return fre+fre1;
}
console.log(sortno([4, 1, 3, 5, 7]));