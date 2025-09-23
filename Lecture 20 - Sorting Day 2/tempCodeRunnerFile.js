function insertion(arr){
  let ind = 0;
  for(let i=1;i<arr.length;i++){
    let firstElementOfUnsorted = arr[i];
    let indexTOInserAt = 0;
    for(let j=ind;j>=0;j--){
      if(arr[j]>firstElementOfUnsorted){
        arr[j+1] = arr[j];
      }
      else{
        indexTOInserAt = j+1;
        break;
      }
    }
    arr[indexTOInserAt]=firstElementOfUnsorted;
    ind ++;
  }
  return arr;
}
let arr5 = [3,1,6,2,8,7,4];
console.log("soretd array using insertion sort : " + insertion(arr5).join(" "));