//Javascript async await
//Async - Executes a funtion asynchronously & returns a promise
//Awaiy - waits for a promise to get settled


//1. the function runs asynchronously
//2. function returns a promise
async function getCountry() {
    let response = await fetch(`https://restcountries.com/v3.1/name/brasil`);
    let data = await response.json();
    console.log(data);
}

getCountry();

