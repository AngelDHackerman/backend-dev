// Prime Numbers Challenge
// Write a TypeScript function that takes a number n as input and returns true if the number is prime and false if it is not. 
// A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.
// 15 is not a prime number because it is divisible by 1, 3, 5, and 15.

// Input: A number: 17
// Expected Output: The function should return: true (because 17 is a prime number)
// Input: A number: 15
// Expected Output: The function should return: false (because 15 is not a prime number)

type NumberInput = number;

const isPrime = (n: NumberInput): boolean => { 
  if (n <= 1) { 
    return false  // Numbers less than or equal to 1 are not prime numbers
  }

  // i starts form 2 because 1 is not relevant for the verification (all numbers can be divided by 1)
  // Loop up to the square root of n for efficiency. If n has no divisors less than or equal to its square root, 
  // it won't have any greater divisors either.
  for (let i = 2; i <= Math.sqrt(n); i++) { 
    if (n % i === 0) { 
      return false; // n is divisible by some number other than 1 and itself
    }
  }

  return true;  // n is prime
}

// Execution

const testNumber = 17;
console.log(`${testNumber} is a prime number? ${isPrime(testNumber)}`);