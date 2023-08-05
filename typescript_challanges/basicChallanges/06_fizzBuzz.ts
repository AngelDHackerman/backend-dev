// FizzBuzz Challenge
// Write a TypeScript function that implements the FizzBuzz game. 
// Your function should take a number n as input and print all numbers from 1 to n. 
// For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". 
// For numbers which are multiples of both three and five, print "FizzBuzz".

// Input: A number n: 15
// Expected Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// ... 
// FizzBuzz

// void, means that there is not value to return. 
function fizzBuzz(n: number): void { 
  for (let i = 1; i <= n; i++) { 
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0 ){ 
      console.log('Fizz');
    } else if (i % 5 === 0) { 
      console.log('Buzz');
    } else { 
      console.log(i)
    }
  }
}


// Execution: 
fizzBuzz(15);