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
  if (user.isVerified) { 
    return `Welcome, ${user.name}! Your ID is ${user.id} and your email is: ${user.email} and you are verified!`
  }
  return `Welcome, ${user.name}! Your ID is ${user.id} and your email is: ${user.email} and you are NOT verified, please verify your account`
}

// Input 1: 

const userTest: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  isVerified: true,
  };

// Expected output: "Welcome, John Doe! Your ID is: XX and your email: XXXX and you are/are not verified."
console.log(welcomeUser(userTest));

// Input 2:

const userAngel: User = { 
  id: 2,
  name: 'Angel Hackerman',
  email: 'AngelHackerman@mail.com',
  isVerified: false
}

console.log(welcomeUser(userAngel))
