// Define a type Product that has the properties id (number), name (string), description (string), and price (number). 
// Write a function that takes an array of Product and returns the most expensive product.


type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

function mostExpensiveProduct(products: Product[]): Product {
  // The `reduce` function iterates over each product in the array, comparing their prices.
  // It returns the product with the highest price by comparing the current product's price with the highest found so far.
  return products.reduce((highest, product) => { 
    if (product.price > highest.price) { 
      return product;
    }
    return highest
  })
}
1
// Input:

const products: Product[] = [
  { id: 1, name: "Product 1", description: "This is product 1", price: 10 },
  { id: 2, name: "Product 2", description: "This is product 2", price: 20 },
  { id: 3, name: "Product 3", description: "This is product 3", price: 30 },
];

// Expected Output: { id: 3, name: "Product 3", description: "This is product 3", price: 30 }
console.log(mostExpensiveProduct(products));

const products2: Product[] = [
  {id: 1, name: "Teclado", description: "Mechanical keyboard", price: 1_000},
  {id: 2, name: "Monitor 34 inch", description: "ultrawide monitor curved", price: 25_000},
  {id: 2, name: "Mouse X", description: "super light and precise mouse pro", price: 3_500},
]

console.log(mostExpensiveProduct(products2))