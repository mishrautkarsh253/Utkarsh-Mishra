//create a new Promise
const myPromise = new Promise((resolve, reject) =>{
    // Simulate an asynchronous operation
    setTimeout(() => {
        const success = Math.random() >0.5 // Change this to false to simulate an erro
        if(success){
            resolve("Promise resolved successfully!");
        } else {
            reject(new Error("Promise rejected with an error."));
        }
    }, 2000);//Simulate delay
});
//Using the Promise
myPromise
    .then(result =>
        console.log('Success',result)) // Logs the resolved value if the promise is successful
    .catch(error =>
        console.error('Error',error.message)); // Logs the error message if the promise is rejected