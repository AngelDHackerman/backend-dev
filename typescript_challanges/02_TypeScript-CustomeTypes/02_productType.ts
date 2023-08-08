// Define a type Product that has the properties id (number), name (string), description (string), and price (number). 
// Write a function that takes an array of Product and returns the most expensive product.


type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

function mostExpensiveProduct(products: Product[]): Product {
  // your code here
}

// Input:

const products: Product[] = [
  { id: 1, name: "Product 1", description: "This is product 1", price: 10 },
  { id: 2, name: "Product 2", description: "This is product 2", price: 20 },
  { id: 3, name: "Product 3", description: "This is product 3", price: 30 },
];


// Expected Output: { id: 3, name: "Product 3", description: "This is product 3", price: 30 }
console.log(mostExpensiveProduct(products));