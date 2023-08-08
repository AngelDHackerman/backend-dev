
// Define a TypeScript interface named UserProfile that represents a user's profile.  -> ok
// The profile should have the following properties: id (number), username (string), email (string), and dateOfBirth (optional string). -> ok
// Write a function that takes an object of type UserProfile and returns the user's name and email. And age if the dateOfBirth is provided.


// An interface in TypeScript is used to define the shape or structure of an object.
interface UserProfile { 
  id: number;
  username: string;
  email: string;
  dateOfBirth?: string;  // the ? indicates that this is a optional property. 
}

// Input:

const user: UserProfile = {
  id: 1,
  username: "Angel_Hackerman",
  email: "Angel@example.com",
  dateOfBirth: "1995-11-19"
};

const getUserInfo = (user: UserProfile): {name: string, email: string, age?: number} => { 
  const userInfo = { 
    name: user.username,
    email: user.email
  }; 

  if (user.dateOfBirth) { 
    const currentDate = new Date()
    const birthDate = new Date(user.dateOfBirth)
    let age = currentDate.getFullYear() - birthDate.getFullYear()

    // Adjust the age if we have not yet reached the month or day of birth in the current year.
    const monthDifference = currentDate.getMonth() - birthDate.getMonth()
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--
    }

    userInfo['age'] = age
  }

  return userInfo
}


// Execution: 

console.log(getUserInfo(user))