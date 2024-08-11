let userInput = prompt("Enter a number between 0 and 1 million:");

let number = Number(userInput); 

if (isNaN(number) || number < 0 || number > 1000000) {
    console.log("Invalid number");
} else {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i; 
    }   
    console.log("The sum of numbers up to " + number + " is: " + sum);
}