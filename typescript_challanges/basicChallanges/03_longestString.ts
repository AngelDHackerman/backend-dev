// Longest String Challenge
// Write a TypeScript function that takes an array of strings as input and returns the longest string. 
// If there is more than one string with the maximum length, return the first one you find.

// Input: An array of strings:  ["apple", "banana", "cherry", "date", "watermelon", "avocate"]
// Expected Output: The longest string in the array:  "elderberry"

type StringArray = string[];

const findLongestString = (strings: StringArray): string => { 
  let longest = "";

  // The function iterates over each string, comparing its length to the current longest string.
  // If a longer string is found, it updates the 'longest' variable.
  // At the end, 'longest' contains the longest string from the array.
  for (const str of strings) {
    if (str.length > longest.length) {
      longest = str;
    }
  }

  return longest;
}


// Execution
const fruits = ["apple", "banana", "cherry", "date", "watermelon", "avocate"];
console.log(findLongestString(fruits));  // Expected Output: "watermelon"