async function fetchOneTodo(productID){
   try{
    const response = await fetch(`https://fakestoreapi.com/products/${productID}`);

    if(!response.ok)
         throw new Error("failed")
    const data = await response.json();
    return{
        data:data,
        error:null,
    };
    }
     catch(err){
        console.log(err);
        return{
        error:err,
        data:null,
  }
 }
}
async function convertResponseToJson(response){
    return await response.json();
}
async function fetchProduct(productID){
    try{
        if(typeof productID !== "number" || productID < 0)
            throw new Error("invalid product ID");
          const todoResponse = await fetchOneTodo();
        if (todoResponse.data) {
        console.log("Todo Response:", todoResponse.data);
        }
    const response = await fetch(`https://fakestoreapi.com/products/${productID}`);
    if(!response.ok) throw new Error("Failed to fetch product details")

    console.log({response});

    const data = await convertResponseToJson(response);

     if(!data){
        throw new Error("unabale to parse the data");
     }
    console.log({data});}
    catch(error){
        console.log(error);
        console.log(error.message);
    }
    finally{
        console.log("this block is always execute");
    }
}
console.log("start");
fetchProduct(1);
console.log("end");
//when I written async, await then error handle at function level

function f1(){
    return new Promise
}
function fetchProduct(productID){
    const response = fetch(`https://fakestoreapi.com/products/${productID}`);
    console.log(response);
}
