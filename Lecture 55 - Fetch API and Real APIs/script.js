const imgEle = document.querySelector("img");
const ulEle = document.querySelector("ul");

//GET Request (Dog Image API)
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => {
    console.log(response);//fetch() DOES NOT GIVE DATA DIRECTLY IT GIVES RESPNSE OBJ
    return response.json();//DATA COMES ONLY AFTER .json() ,Now you see actual API data
  })
  .then((response) => {
    console.log(response);//actual data
    if (response.status === "error") { //mannual validation 
      throw new Error(response.message);  
    }
    imgEle.src = response.message;
  })
  .catch((error) => {
    console.error(error);
  });

  //POST Request
  const dummyPostData = {
  title: "This is a POST post",
  userId: 7,
};//send this data on server

fetch("https://dummyjson.com/posts/add", {//if successfully data gone on server it shows 201
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(dummyPostData),
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));

  //Fetch Product & Append to <ul>
  // On success, we update the UI directly, which is visible feedback. On failure,
  //  we log or handle the error because there is nothing valid to render
  function fetchProduct(productId) {
  fetch(`https://dummyjson.com/products/${productId}`)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      if (!response.title) {
        throw new Error(response.message);
      }

      const liChildEle = document.createElement("li");
      liChildEle.textContent = response.title;
      ulEle.appendChild(liChildEle);
    })
    .catch((error) => console.error(error));
}
fetchProduct(1);
fetchProduct(2);
fetchProduct(3);

// //selecting container card
const productsContainerDiv = document.querySelector(".products");
function displayProduct(productId) {
  fetch(`https://dummyjson.com/products/${productId}`)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      if (!response.title) {
        throw new Error(response.message);//Manual error handling is done where we explicitly check the response and throw an error, because fetch does not reject on HTTP
      }
      
      const productDivEle = document.createElement("div");
      productDivEle.classList.add("product");

      productDivEle.innerHTML = `
        <h2>${response.title}</h2>
        <h3>${response.brand}</h3>
        <p>${response.description}</p>
        <span>${response.price}</span>
        <img src=${response.images[0]} alt="loading the image" />
      `;

      productsContainerDiv.appendChild(productDivEle);
    })
    .catch((error) => console.error(error));
}
displayProduct(1);
displayProduct(2);
displayProduct(3);
displayProduct(4);
displayProduct(5);
displayProduct(6);



//Mannual Error Handling why imp ?
// Detects logical failure
// Converts it into a real error
// Sends it to .catch()


// .catch() CAN HANDLE (Automatically)
//.catch() handles only rejected promises, not HTTP errors or logical errors automatically.
