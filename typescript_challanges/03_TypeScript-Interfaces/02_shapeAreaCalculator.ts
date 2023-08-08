
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

// Type Guard for cicle 
const isCircle = (shape: Circle | Rectangle): shape is Circle => { 
  return (shape as Circle).radius !== undefined;
}

// Type Guard para Rectangle
const isRectangle = (shape: Circle | Rectangle): shape is Rectangle => { 
  return (shape as Rectangle).width !== undefined && (shape as Rectangle).height !== undefined;
}

const areaShape = (shape: Circle | Rectangle): number => { 
  if (isCircle(shape)) { 
    return Math.PI * shape.radius * shape.radius;
  } else if (isRectangle(shape)) { 
    return shape.width * shape.height;
  } else { 
    return 0;
  }
}

// Input:

const shape1: Circle = {
  radius: 5
  };
  
const shape2: Rectangle = {
  width: 10,
  height: 5
};


// Execution: 

console.log(areaShape(shape1))  // 78.54 for a circle with radius 5
console.log(areaShape(shape2))  // 50 for a rectagle with width 10 and height 5