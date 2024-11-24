
//Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("great")); 


//Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("forgive"));



//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
    return sentence.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
}
console.log(capitalizeWords("bring the book"));



//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([4, 3, 7]));



function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([2, 8, 5]));


//Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([3, 9, 6]));


//Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
    return arr.filter(condition);
}
console.log(filterArray([2, 4, 3], num => num > 1)); 


//Factorial: Write a function to calculate the factorial of a given number.
function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(5));



//Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

console.log(isPrime(20)); 



//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacciSequence(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    let fib = [0, 1];
    while (fib.length < terms) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}
console.log(fibonacciSequence(5));
