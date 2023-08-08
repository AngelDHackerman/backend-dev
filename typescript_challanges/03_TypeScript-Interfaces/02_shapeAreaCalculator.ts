
// Define two interfaces: Circle and Rectangle. -> ok
// The Circle should have a property radius (number) and the Rectangle should have properties width (number) and height (number). -> ok
// Write a function that calculates the area of a given shape.


interface Circle { 
  radius: number
}

interface Rectangle { 
  width: number,
  height: number
}

// Input:

const shape1: Circle = {
  radius: 5
  };
  
const shape2: Rectangle = {
  width: 10,
  height: 5
};