# TypeScript Coding Challenges

Here you'll find the Typescript challanges that Chat-gpt challanged me to resolve, this is with the goal of overcome a near future technical interview. 

## TypeScript Coding Challenges

- [Basic challanges](#basic-challanges)
- [TypeScript With Custom Types](#typescript-with-custom-types)
- [TypeScript Using Interfaces](#typescript-using-interfaces)
- [Asynchronous Typescript](#asynchronous-typescript)
- [AWS and Typescript challanges](#aws-and-typescript-challanges)

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


---


## TypeScript With Custom Types:

### User Type Challenge
Define a type `User` that has the properties `id` (number), `name` (string), `email` (string), and `isVerified` (boolean). 
Write a function that takes a User object and returns a welcome string that includes the user's name, id, email, and if it is verfied.


- 

  ``` 
  type User = {
    <!-- Put the key:values here -->
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

  __Expected output:__ `"Expected output: "Welcome, John Doe! Your ID is: XX and your email: XXXX and you are/are not verified.""`

### Product Type Challenge

Define a type `Product` that has the properties `id` (number), `name` (string), `description` (string), and `price` (number). Write a function that takes an array of `Product` and returns the most expensive product.

- 

  ```
  type Product = {
    <!-- your time product here -->
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

ADMIN: ["CREATE", "READ", "UPDATE", "DELETE"]

USER: ["READ", "CREATE"]

GUEST: ["READ"]

- 

 ```
 type Role = "ADMIN" | "USER" | "GUEST";

  function allowedActions(// ): // {
    // your code here
  }
 ```

  __Input:__

  ```
  const role: Role = "ADMIN";

  console.log(allowedActions(role));
  ```

  __Expected Output:__ `["CREATE", "READ", "UPDATE", "DELETE"]`

---

## TypeScript Using Interfaces

### User Profile Interface

Define a TypeScript interface named `UserProfile` that represents a user's profile. 
The profile should have the following properties: `id` (number), `username` (string), `email` (string), and `dateOfBirth` (optional string). 
Write a function that takes an object of type `UserProfile` and returns the user's name and email. And age if the `dateOfBirth` is provided.

__Input:__

- 

  ```
  const user: UserProfile = {
    id: 1,
    username: "johnDoe",
    email: "john@example.com",
    dateOfBirth: "1990-01-01"
  };
  ```

  __Expected Output:__ `33 // Assuming the current year is 2023`


###  Shape Area Calculator

Define two interfaces: `Circle` and `Rectangle`. 
The `Circle` should have a property `radius` (number) and the `Rectangle` should have properties `width` (number) and `height` (number). 
Write a function that calculates the area of a given shape.

__Input:__

- 

  ```
  const shape1: Circle = {
  radius: 5
  };

  const shape2: Rectangle = {
    width: 10,
    height: 5
  };
  ```

  __Expected Output:__
  `78.54 // For shape1 (Circle with radius 5)`
  `50   // For shape2 (Rectangle with width 10 and height 5)`

### Todo List Interface

Define an interface named `Todo` that represents a todo item. 
The todo should have the following properties: `id` (number), `task` (string), and `completed` (boolean). 
Write a function that filters out completed tasks from an array of todos.

- 

  __Input:__

  ```
  const todos: Todo[] = [
  { id: 1, task: "Do laundry", completed: false },
  { id: 2, task: "Buy groceries", completed: true },
  { id: 3, task: "Clean room", completed: false }
  ];
  ```

  __Expected Output:__ 

  ```
  [
  { id: 1, task: "Do laundry", completed: false },
  { id: 3, task: "Clean room", completed: false }
  ]
  ```


### Vehicle Interface

Define an interface named `Vehicle` that represents a vehicle. 
The vehicle should have properties `brand` (string), `year` (number), and `isElectric` (boolean). 
Write a function that returns the age of the vehicle.

- 

  __Input:__

  ```
  const car: Vehicle = {
  brand: "Toyota",
  year: 2015,
  isElectric: false
  };
  ```

  __Expected Output:__ `8 // Assuming the current year is 2023`


### Book Interface

Define an interface named `Book` that represents a book. 
The book should have properties `title` (string), `author` (string), `publishedYear` (number), and `genres` (array of strings). 
Write a function that checks if a given book belongs to a specific genre.

- 

  __Input:__

  ```
  const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  genres: ["Novel", "Historical"]
  };
  ```

  __Expected Output:__  

  `true  // If checking for "Novel"`
  `false // If checking for "Science Fiction"`


---

## Asynchronous Typescript

### Jikan Anime & Manga API Challenge
The Jikan API (https://jikan.moe/) is a public API that allows you to fetch information about various anime and manga.
Write an asynchronous TypeScript function that takes an anime ID as input and returns the title of the anime and the synopsis.
The function should properly handle errors and cases where the anime ID does not exist.

__Example of what the API should return:__

- 
  ```
  {
  "title": "Naruto",
  "synopsis": "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. He wants to become the Hokage, the village leader, in order to gain recognition from everyone around him."
  }
  ```

### Asynchronous Timer Challenge
Write an asynchronous TypeScript function that implements a timer. 
The function should take a number `n` as input and wait `n` milliseconds before resolving a promise. 
The use of JavaScript's `sleep` or `setTimeout` function is not allowed.

__Input:__

- 

  ```
  const n = 1000; // 1000 milliseconds, or 1 second

  asyncTimer(n).then(() => {
    console.log('Timer has finished!');
  });
  ```


__Expected Output:__

- 

  `Timer has finished!`

--- 

## AWS and Typescript challanges: 

### 1. Lambda: DynamoDB Data Retrieval

__Description:__

Write a Lambda function in TypeScript that retrieves a record from a DynamoDB table using a given ID.

__Input / Output:__

`Input: { "id": "xyz123" }`

`Output: { "name": "Alice", "message": "Hello from Alice!" }`


### 2. EventBridge: Trigger Lambda on Event

__Description:__

Create an EventBridge rule that triggers a Lambda function (written in TypeScript) whenever a new record is inserted into a DynamoDB table. The Lambda function should log the details of the new record.

__Input / Output:__

`Input: New record inserted into DynamoDB`

`Output: Log entry with details of the new record`

Lambda: Batch Processing with DynamoDB
Description:
Write a Lambda function in TypeScript that processes multiple records in a DynamoDB table. The function should retrieve all records where the message contains a specific keyword and return them.

Input / Output:
Input: { "keyword": "Hello" }
Output: Array of records containing the keyword "Hello"

TypeScript: AWS SDK Usage
Description:
Define a TypeScript function that uses the AWS SDK to list all the tables in your DynamoDB. Make sure to handle any potential errors and return a clear message to the user.

Input / Output:
Input: None
Output: Array of table names or error message

Lambda: EventBridge Logging
Description:
Create a Lambda function in TypeScript that listens to all events from EventBridge. Whenever an event is received, the function should log the event source and detail.

Input / Output:
Input: Event from EventBridge
Output: Log entry with event source and detail