// User Type Challenge

// Define a type User that has the properties id (number), name (string), email (string), and isVerified (boolean). 
// Write a function that takes a User object and returns a welcome string that includes the user's name, id, email, and if it is verfied.

// Code: 

type User = {
  id: number;
  name: string;
  email: string;
  isVerified: boolean;
};

function welcomeUser(user: User): string {
  return `Welcome, `
}

// Input: 

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  isVerified: true,
  };
  


// Expected output: "Welcome, John Doe! Your ID is: XX and your email: XXXX and you are/are not verified."
console.log(welcomeUser(user));