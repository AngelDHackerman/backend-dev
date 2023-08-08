// Define a type Role that is a union of the strings "ADMIN", "USER", and "GUEST". 
// Write a function that takes a Role and returns the allowed actions for that role.


type Role = "ADMIN" | "USER" | "GUEST";

function allowedActions(role: Role): string[] {
   // your code here
}


// Input: 

const role: Role = "ADMIN";

console.log(allowedActions(role));
// Expected Output: ["CREATE", "READ", "UPDATE", "DELETE"]