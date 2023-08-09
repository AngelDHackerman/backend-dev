// Define an interface named Vehicle that represents a vehicle. -> ok
// The vehicle should have properties brand (string), year (number), and isElectric (boolean). -> ok
// Write a function that returns the age of the vehicle.

interface Vehicle { 
  brand: string,
  year: number,
  isElectric: boolean
}

// Input: 

const car: Vehicle = {
  brand: "Toyota",
  year: 2015,
  isElectric: false
};

const carAge = (vehicle: Vehicle): number => { 
  const currentYear = new Date().getFullYear();
  return currentYear - vehicle.year
}

// Expected Output: 8 // Assuming the current year is 2023

console.log(carAge(car))