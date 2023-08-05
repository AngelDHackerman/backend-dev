// Fibonacci Challange

// Write a TypeScript function that takes a number `n` as input and returns the `n`th number in the Fibonacci sequence. 
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. 
// For example, the sequence starts 0, 1, 1, 2, 3, 5, 8, 13, ...

type FibonacciNumber = number;

const fibonacci = (n: FibonacciNumber): FibonacciNumber => { 
  if (n <= 1) { 
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// execution: 

const result = fibonacci(8);
console.log(result)