// Define an interface named Todo that represents a todo item. 
// The todo should have the following properties: id (number), task (string), and completed (boolean). 
// Write a function that filters out completed tasks from an array of todos.

interface Todo { 
  id: number,
  task: string, 
  completed: boolean
}

// Input: 

const todos: Todo[] = [
  { id: 1, task: "Do laundry", completed: false },
  { id: 2, task: "Buy groceries", completed: true },
  { id: 3, task: "Clean room", completed: false }
];

const filterCompletedTodos = (todos: Todo[]): Todo[] => { 
  return todos.filter(todo => !todo.completed)
}

// Expected Output:

// [
//   { id: 1, task: "Do laundry", completed: false },
//   { id: 3, task: "Clean room", completed: false }
// ]

console.log(filterCompletedTodos(todos));