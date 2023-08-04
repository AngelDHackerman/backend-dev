# TypeScript Coding Challenges

Here you'll find the Typescript challanges that Chat-gpt challanged me to resolve, this is with the goal of overcome a near future technical interview. 

## Basic challanges:

### Fibonacci Challenge
Write a TypeScript function that takes a number `n` as input and returns the `n`th number in the Fibonacci sequence. 
The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. For example, the sequence starts 0, 1, 1, 2, 3, 5, 8, 13, ...

### Prime Numbers Challenge
Write a TypeScript function that takes a number `n` as input and returns `true` if the number is prime and `false` if it is not. 
A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

### Longest String Challenge
Write a TypeScript function that takes an array of strings as input and returns the longest string. 
If there is more than one string with the maximum length, return the first one you find.

### Pair Sum Challenge
Write a TypeScript function that takes an array of numbers and a target value. 
The function should find two numbers in the array that add up to the target value and return their indices in an array. 
If there are no two numbers that add up to the target value, the function should return an empty array.

### Palindrome Challenge
Write a TypeScript function that checks if a given word is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization. Your function should not use the `.split()`, `.join()`, or `.reverse()` methods.

### FizzBuzz Challenge
Write a TypeScript function that implements the FizzBuzz game. Your function should take a number `n` as input and print all numbers from 1 to `n`. For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

### Rotated Matrix Challenge
Write a TypeScript function that takes a 2D matrix (an array of arrays) as input and returns the matrix rotated 90 degrees clockwise.


## Asynchronous Typescript

### Star Wars API Challenge
The Star Wars API (https://swapi.dev/) is a public API that allows you to fetch information about various Star Wars entities. Write an asynchronous TypeScript function that takes a character ID as input and returns the name of the character and the title of the first film they appeared in. The function should properly handle errors and cases where the character ID does not exist.

### Asynchronous Timer Challenge
Write an asynchronous TypeScript function that implements a timer. The function should take a number `n` as input and wait `n` milliseconds before resolving a promise. The use of JavaScript's `sleep` or `setTimeout` function is not allowed.


## AWS and Typescript challanges: 

### AWS S3 Challenge
Write a TypeScript function that takes a filename and an S3 bucket as input and uploads that file to the S3 bucket. Be sure to handle any errors that might occur during the file upload.

### AWS Lambda Challenge
Write an AWS Lambda function in TypeScript that triggers whenever a new file is added to an S3 bucket. The Lambda function should take the file and move it to another bucket.

### AWS DynamoDB Challenge
Write a TypeScript function that takes a user ID as input and retrieves that user's information from a DynamoDB table. The function should properly handle errors and cases where the user ID does not exist in the table.

### AWS API Gateway Challenge
Design and implement a REST API using AWS API Gateway and Lambda. The API should have endpoints to create, read, update, and delete (CRUD) users in a database.
