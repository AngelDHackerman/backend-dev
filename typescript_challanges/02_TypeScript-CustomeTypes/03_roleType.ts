// Define a type Role that is a union of the strings "ADMIN", "USER", and "GUEST". 
// Write a function that takes a Role and returns the allowed actions for that role.
// ADMIN: ["CREATE", "READ", "UPDATE", "DELETE"]
// USER: ["READ", "CREATE"]
// GUEST: ["READ"]


type Role = "ADMIN" | "USER" | "GUEST";

function allowedActions(role: Role): string[] {
  if (role == 'ADMIN') { 
    return ["CREATE", "READ", "UPDATE", "DELETE"]
  } else if ( role == 'USER') {
    return ["READ", "CREATE"]
  } else if (role == 'GUEST') { 
    return ["READ"]
  }
}


// Input: 

const role: Role = "ADMIN";

console.log(allowedActions(role));
// Expected Output: ["CREATE", "READ", "UPDATE", "DELETE"]

const role2: Role = "GUEST";
console.log(allowedActions(role2));
