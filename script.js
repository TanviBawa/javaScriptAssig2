// Importing everything from the utilities.js file as an object 'utils'
import * as utils from './utilities1.js';


// Second way to import :
// import { isPalindrome, fibonacciSequence, countVowels, power } from './utilities.js';


// Function 1: Check if the word is a palindrome
const word = 'MOM';
utils.isPalindrome(word);  

// Function 2: Generate Fibonacci sequence
const n = 7;
const fibSequence = utils.fibonacciSequence(n);
console.log(`The first ${n} numbers of the Fibonacci sequence are: ${fibSequence.join(', ')}`);


// Function 3: Count vowels in a string
const sentence = 'Javascript Frameworks';
const vowelCount = utils.countVowels(sentence);
console.log(`The number of vowels in '${sentence}' is: ${vowelCount}`);


// Function 4: Calculate the power of a number
const base = 2;
const exponent = 3;
const result = utils.power(base, exponent);
console.log(`${base} raised to the power of ${exponent} is: ${result}`);

