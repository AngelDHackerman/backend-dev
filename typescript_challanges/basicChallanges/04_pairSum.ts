// Pair Sum Challenge
// Write a TypeScript function that takes an array of numbers and a target value. 
// The function should find two numbers in the array that add up to the target value and return their indices in an array. 
// If there are no two numbers that add up to the target value, the function should return an empty array.

// Input: An array of numbers: [10, 15, 3, 7] and a target value: 17
// Expected Output: The function should return: [0, 3] (because 10 + 7 equals 17 and the indices of 10 and 7 in the array are 0 and 3 respectively)
// Input: An array of numbers: [1, 2, 3, 4, 5] and a target value: 11
// Expected Output: The function should return: [] (because there are no two numbers in the array that add up to 11)

type PairIndices = [number, number] | [];

const findPairIndices = (nums: number[], target: number): PairIndices => { 
  // Create a map to store the difference between the target and the current number
  // Using TypeScript to define numMap as a Map with both keys and values being numbers.
  const numMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) { 
    const complement = target - nums[i];

    if (numMap.has(nums[i])) { 
      return [numMap.get(nums[i]) as number, i];
    }
    numMap.set(complement, i)
  }

  return [];
}


// Execution
console.log(findPairIndices([10, 15, 3, 7], 17)); // Expected Output: [0, 3]
console.log(findPairIndices([1, 2, 3, 4, 5], 11)); // Expected Output: []