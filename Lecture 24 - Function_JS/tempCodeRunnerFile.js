try{
    let a=10;
    let b=20;
    if(b==0) throw "can not divide by zero!"
    console.log(a/b);
}
catch(error){
  console.log("Error");
}