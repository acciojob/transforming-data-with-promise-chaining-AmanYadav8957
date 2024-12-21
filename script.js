//your JS code here. If required.
// Get references to the input, button, and output div  
const input = document.getElementById("ip");  
const button = document.getElementById("btn");  
const outputDiv = document.getElementById("output");  

// Function to create a promise that resolves after a delay  
function delayedPromise(value, delay) {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            resolve(value);  
        }, delay);  
    });  
}  

// Function to handle the button click  
button.addEventListener("click", () => {  
    // Get the input value  
    const number = Number(input.value);  
    
    // Check if the input is a valid number  
    if (isNaN(number)) {  
        outputDiv.textContent = "Please enter a valid number.";  
        return;  
    }  

    // Start the promise chain  
    delayedPromise(number, 2000)  
        .then((result) => {  
            outputDiv.textContent = `Result: ${result}`;  
            return delayedPromise(result * 2, 1000); // Multiply by 2  
        })  
        .then((result) => {  
            outputDiv.textContent = `Result: ${result}`;  
            return delayedPromise(result - 3, 1000); // Subtract 3  
        })  
        .then((result) => {  
            outputDiv.textContent = `Result: ${result}`;  
            return delayedPromise(result / 2, 1000); // Divide by 2  
        })  
        .then((result) => {  
            outputDiv.textContent = `Result: ${result}`;  
            return delayedPromise(result + 10, 1000); // Add 10  
        })  
        .then((result) => {  
            outputDiv.textContent = `Final Result: ${result}`; // Display final result  
        })  
        .catch((error) => {  
            outputDiv.textContent = `Error: ${error}`; // Handle any errors  
        });  
});