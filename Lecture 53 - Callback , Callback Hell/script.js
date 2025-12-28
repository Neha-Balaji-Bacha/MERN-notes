const id = setInterval(() => {
    const date = Date.now();
    let diff = Date.now()-date;
    console.log("start");
    while(diff < 500){
        diff = Date.now() - date;
    }
    console.log("end");
},1000);
 setTimeout(() => {
    clearInterval(id);
 },2000);

 //setinterval using settimeout
 function setIntervalUsingSetTimeout(){
    const date = Date.now();
    let diff = Date.now() - date;
    console.log("start");
     while(diff < 5000){
        diff = Date.now() - date;
    }
    console.log("end");
    setTimeout(setIntervalUsingSetTimeout,1000);
 }
 function callbackFn(){}
 function saveFormData(callback){
    //CALLBACK HELL
    //code to save personal details
    setTimeout(() =>{
    //code to save educational details
        setTimeout(() => {
         //save all work experinece
          setTimeout(() => {
            //task x
          },1000);
        },1000);
    },1000);
    savePersonalDetails();
 }
 saveFormData(callbackFn);

 //managing callbacks to prevent callback hell  (The Pyramid Boom).
 function savePersonalDetails(){
    //code to save all personalDetails
    setTimeout(saveEducationalDetails,1000);
 }
 function saveEducationalDetails(){
     //code to save educational details
    setTimeout(saveWorkExperience,1000);
 }
 function saveWorkExperience(){
    //code save all work
 }


function callbackAnError(error,data){
 if(error) console.error(error);
 else console.log(data);
}
 function fetchUser(){
    return {id: 1, name:"neha"};
 }
 function displayUser(errorCallbackFn){
    setTimeout(() => {
        //assume that it is fetched from an API & may fail also
        const userDetails = fetchUser();
        //if api is failing to fetch ,it returns null which will be assigned to be userdetails
        if(userDetails){
            errorCallbackFn(null,userDetails);
        }
        else{
            errorCallbackFn("user not found",null);
        }
    },1000);
 }
 displayUser(callbackAnError);
function callbackExecutionFlow(){
    console.log("start");
        setTimeout(() => {
            console.log("Inside");
        },1000);
    console.log("end");
}
callbackExecutionFlow();