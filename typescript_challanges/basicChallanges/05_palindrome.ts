// Palindrome Challenge
// Write a TypeScript function that checks if a given word is a palindrome. 
// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, 
// ignoring spaces, punctuation, and capitalization. Your function should not use the .split(), .join(), or .reverse() methods.

// Input: A string: "racecar"
// Expected Output: The function should return: true (because "racecar" is a palindrome, it reads the same forward and backward)
// Input: A string: "openai"
// Expected Output: The function should return: false (because "openai" is not a palindrome, it does not read the same forward and backward)

type PalindromeString = string;

const isPalindrome = (input: PalindromeString): boolean => { 
  // replace() and the regular expression remove non-alphanumeric characters and then it is converted to lowercase.
  const sanitizedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = sanitizedInput.length - 1; 

  while (left < right) { 
    if (sanitizedInput[left] !== sanitizedInput[right]) { 
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Execution
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("openai"));   // false