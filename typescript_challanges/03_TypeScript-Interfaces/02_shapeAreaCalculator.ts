
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

// 'shape is Circle' is a Type Guard. If the function returns true, it ensures 'shape' is of type 'Circle'. 
// If false, 'shape' is not a 'Circle' (and in this context, would be a 'Rectangle').
const isCircle = (shape: Circle | Rectangle): shape is Circle => { 
  // Using type assertion '(shape as Circle).radius' to treat 'shape' as type 'Circle' and access its 'radius' property.
  // If 'shape' was actually of type 'Rectangle', this property would be 'undefined'.
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