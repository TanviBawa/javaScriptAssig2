// JS Assignment 2 
//Group 2
// Tanvi Bawa (200562669)
// Harnoorpreet Kaur(200572177)
// Diksha Diksha (200566472)

// This utilities files is basically to create and define the functions which we will export from here and import in our main js file to execute them.

//Function 1: To ckecek if the word is palidrome or not. palidrome words are those which read same from right to left and left to right like MOM.

export function isPalindrome(word) {
    const isPalin = word === word.split('').reverse().join(''); 
    // split('') this will first split hte characters of the word and store them in an array
    // reverse('') this will then reverse the characters of the array and store new values
    // join('') this will again form the word by joining the letters from the array which were reversed
    // if the original word is equal to the reversed word it will say the word is palidrome

    // Print the message based on whether it's a palindrome or not
  if (isPalin) {
    console.log(`The word '${word}' is a palindrome.`);
  } else {
    console.log(`The word '${word}' is not a palindrome.`);
  }
  }

 // Function 2: To calculate fibonnic series: 
 // Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. 
 // It typically starts with 0 and 1, and the sequence goes on like this: 0 1 1 2 3 5 8 13 ....
 export function fibonacciSequence(n) {
    let a = 0, b = 1;
    let result = [];  // Store result in the array.
    
    for (let i = 0; i < n; i++) {  // Start from 0 till the number user want the series to be which is n.
      result.push(a);              // Add the current number (a) to the result array
      [a, b] = [b, a + b];         // Swap the values of a and b to generate the next Fibonacci number
    }
    
    return result;  // Return the array with the Fibonacci sequence up to n terms
  }


  // Function 3: Count the number of vowels in the word. 
  export function countVowels(str) {
    let count = 0;  // Initialize the count to 0, which will track the number of vowels found
    const vowels = 'aeiou';  // Define a string containing all the vowels (lowercase)
  
    
    for (let char of str.toLowerCase()) { // Loop through each character of the input string
      // Convert the character to lowercase and check if it's a vowel
      if (vowels.includes(char)) {
        count++;  // If it's a vowel, increment the count
      }
    }
    
    return count;  // Return the total count of vowels found in the string
  }
  


  // Function 4: Calculate the power of a number
  export function power(base, exponent) {
    let result = 1;  // Initialize result to 1 to store the answer
    
    
    for (let i = 0; i < exponent; i++) {  // Multiply base by itself for 'exponent' number of  times
      result = result * base;       // Multiply the current result by the base in each iteration of loop
    }
    
    return result;  // Return the final result after the loop finishes
  }