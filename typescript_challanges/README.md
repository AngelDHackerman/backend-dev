# TypeScript Coding Challenges

Here you'll find the Typescript challanges that Chat-gpt challanged me to resolve, this is with the goal of overcome a near future technical interview. 

<details>
<summary>How to Install and Use</summary>

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).
- You have installed [TypeScript](https://www.typescriptlang.org/download) globally. You can 

* Install it using npm:

```npm install -g typescript```

* You have installed nodemon globally. Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. 
Install it using npm:

```npm install -g nodemon```


### Using TypeScript Challenges
To use TypeScript Challenges, follow these steps:

* Clone this repository to your local machine.

```https://github.com/AngelDHackerman/backend-dev.git```

* Navigate to the project directory.

```cd typescript-challenges```

* Install the project dependencies.

```npm install --save-dev typescript```  

* Change the configuration of the tsconfig.json file

```"outDir": "dist",``` This indicate to which folder you want to send the transpile javascript files. 

__(For this steps you can use 2 terminal tabs or as I recoment to you, spilt your terminal in half)__

* Run the JavaScript files with nodemon: 

```nodemon dist/<filename>.js```

* If you want to keep the TypeScript compiler running in watch mode, use the following command:

```tsc --watch```

This will automatically compile your TypeScript files to JavaScript whenever they are saved.

</details>


## Basic challanges:

### Fibonacci Challenge
Write a TypeScript function that takes a number `n` as input and returns the `n`th number in the Fibonacci sequence. 
The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. 

The Fibonacci sequence starts as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

- 
  __Input:__
  `A number representing the position in the Fibonacci sequence: 7`

  __Expected Output:__
  `The number at the 7th position in the Fibonacci sequence is: 13`

  __Explanation:__
  `So, the number at the 7th position is 13.`


### Prime Numbers Challenge
Write a TypeScript function that takes a number `n` as input and returns `true` if the number is prime and `false` if it is not. 
A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

- 
  __Input:__
  `A number: 17`

  __Expected Output:__
  `The function should return: true (because 17 is a prime number)`

  __Input:__
  `A number: 15`

  __Expected Output:__
  `The function should return: false (because 15 is not a prime number)`
  `15 is not a prime number because it is divisible by 1, 3, 5, and 15.`

### Longest String Challenge
Write a TypeScript function that takes an array of strings as input and returns the longest string. 
If there is more than one string with the maximum length, return the first one you find.

- 
  __Input:__
  `An array of strings:  ["apple", "banana", "cherry", "date", "elderberry"]`

  __Expected Output:__
  `The longest string in the array:  "elderberry"`

### Pair Sum Challenge
Write a TypeScript function that takes an array of numbers and a target value. 
The function should find two numbers in the array that add up to the target value and return their indices in an array. 
If there are no two numbers that add up to the target value, the function should return an empty array.

- 
  __Input:__
  `An array of numbers: [10, 15, 3, 7] and a target value: 17`

  __Expected Output:__
  `The function should return: [0, 3] (because 10 + 7 equals 17 and the indices of 10 and 7 in the array are 0 and 3 respectively)`

  __Input:__
  `An array of numbers: [1, 2, 3, 4, 5] and a target value: 11`

  __Expected Output:__
  `The function should return: [] (because there are no two numbers in the array that add up to 11)`


### Palindrome Challenge
Write a TypeScript function that checks if a given word is a palindrome. 
A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization. 
Your function should not use the `.split()`, `.join()`, or `.reverse()` methods.

- 
  __Input:__
  `A string: "racecar"`

  __Expected Output:__
  `The function should return: true (because "racecar" is a palindrome, it reads the same forward and backward)`

  __Input:__
  `A string: "openai"`

  __Expected Output:__
  `The function should return: false (because "openai" is not a palindrome, it does not read the same forward and backward)`

### FizzBuzz Challenge
Write a TypeScript function that implements the FizzBuzz game. 
Your function should take a number `n` as input and print all numbers from 1 to `n`. For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

- 
  __Input:__
  `A number n: 15`

  __Expected Output:__

  ```
  1
  2
  Fizz
  4
  Buzz
  Fizz
  7
  8
  Fizz
  Buzz
  11
  Fizz
  13
  14
  FizzBuzz
  ```


### Rotated Matrix Challenge
Write a TypeScript function that takes a 2D matrix (an array of arrays) as input and returns the matrix rotated 90 degrees clockwise.

- 
  __Input:__

  A 2D matrix

  ```
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  ```

  __Expected Output:__

  The matrix rotated 90 degrees clockwise:

  ```
  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ]
  ```

---


## TypeScript Exercises That Uses Custom Types:

### User Type Challenge
Define a type `User` that has the properties `id` (number), `name` (string), `email` (string), and `isVerified` (boolean). 
Write a function that takes a `User` object and returns a welcome string that includes the user's name.

- 

  ``` 
  type User = {
    id: number;
    name: string;
    email: string;
    isVerified: boolean;
  };

  function welcomeUser(user: User): string {
    // your code here
  }
  ```

  __Input:__

  ```
  const user: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  isVerified: true,
  };

  console.log(welcomeUser(user));
  ```

  __Expected output:__ `"Welcome, John Doe!"`

### Product Type Challenge

Define a type `Product` that has the properties `id` (number), `name` (string), `description` (string), and `price` (number). Write a function that takes an array of `Product` and returns the most expensive product.

- 

  ```
  type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
  };

  function mostExpensiveProduct(products: Product[]): Product {
    // your code here
  }
  ```

  __Input:__

  ```
  const products: Product[] = [
    { id: 1, name: "Product 1", description: "This is product 1", price: 10 },
    { id: 2, name: "Product 2", description: "This is product 2", price: 20 },
    { id: 3, name: "Product 3", description: "This is product 3", price: 30 },
  ];

  console.log(mostExpensiveProduct(products));
  ```

  __Expected Output:__ `{ id: 3, name: "Product 3", description: "This is product 3", price: 30 }`

### Role Type Challenge

Define a type `Role` that is a union of the strings "ADMIN", "USER", and "GUEST". Write a function that takes a `Role` and returns the allowed actions for that role.

- 

 ```
 type Role = "ADMIN" | "USER" | "GUEST";

  function allowedActions(role: Role): string[] {
    // your code here
  }
 ```

  __Input:__

  ```
  const role: Role = "ADMIN";

  console.log(allowedActions(role));
  ```

  __Expected Output:__ `["CREATE", "READ", "UPDATE", "DELETE"]`

### Shape Type Challenge

Define a type `Shape` that is a union of two interfaces: `Circle` and `Rectangle`. `Circle` should have a `radius` (number) and `Rectangle` should have a `width` and a `height` (both numbers). Write a function that takes a `Shape` and returns its area.

- 

  ```
  interface Circle {
  radius: number;
  }

  interface Rectangle {
    width: number;
    height: number;
  }

  type Shape = Circle | Rectangle;

  function area(shape: Shape): number {
    // your code here
  }
  ```

  __Input:__

  ```
  const circle: Circle = { radius: 5 };
  const rectangle: Rectangle = { width: 4, height: 6 };

  console.log(area(circle));  // for circle
  console.log(area(rectangle));  // for rectangle
  ```

  __Expected Output:__
  
  `78.53981633974483` // for circle

  `24` // for rectangle

---

## Asynchronous Typescript

### Star Wars API Challenge
The Star Wars API (https://swapi.dev/) is a public API that allows you to fetch information about various Star Wars entities. 
Write an asynchronous TypeScript function that takes a character ID as input and returns the name of the character and the title of the first film they appeared in. 
The function should properly handle errors and cases where the character ID does not exist.

### Asynchronous Timer Challenge
Write an asynchronous TypeScript function that implements a timer. 
The function should take a number `n` as input and wait `n` milliseconds before resolving a promise. 
The use of JavaScript's `sleep` or `setTimeout` function is not allowed.


--- 

## AWS and Typescript challanges: 

### AWS S3 Challenge
Write a TypeScript function that takes a filename and an S3 bucket as input and uploads that file to the S3 bucket. 
Be sure to handle any errors that might occur during the file upload.

### AWS Lambda Challenge
Write an AWS Lambda function in TypeScript that triggers whenever a new file is added to an S3 bucket. 
The Lambda function should take the file and move it to another bucket.

### AWS DynamoDB Challenge
Write a TypeScript function that takes a user ID as input and retrieves that user's information from a DynamoDB table. 
The function should properly handle errors and cases where the user ID does not exist in the table.

### AWS API Gateway Challenge
Design and implement a REST API using AWS API Gateway and Lambda. The API should have endpoints to create, read, update, and delete (CRUD) users in a database.



---

Made with love 💚 by Angel Hackerman and an AI.