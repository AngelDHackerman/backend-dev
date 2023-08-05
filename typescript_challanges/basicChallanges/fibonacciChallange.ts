// Fibonacci Challange

// Write a TypeScript function that takes a number `n` as input and returns the `n`th number in the Fibonacci sequence. 
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. 
// For example, the sequence starts 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

// Input: A number representing the position in the Fibonacci sequence: 7
// Expected Output: The number at the 7th position in the Fibonacci sequence is: 13
// Explanation: So, the number at the 7th position is 13.

type FibonacciNumber = number;

const fibonacci = (n: FibonacciNumber): FibonacciNumber => { 
  if (n <= 1) { 
    return n;
  }
  
  let prev = 0;
  let curr = 1;

  // Start from 2 because the first two Fibonacci numbers (0 and 1) are already defined in prev and curr variables
  for (let i = 2; i <= n; i++) { 
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}


// Execution: 

const result = fibonacci(7);
console.log(result);