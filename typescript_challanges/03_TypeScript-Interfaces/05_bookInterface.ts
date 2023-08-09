// Define an interface named Book that represents a book. -> ok
// The book should have properties title (string), author (string), publishedYear (number), and genres (array of strings). -> ok
// Write a function that checks if a given book belongs to a specific genre.

interface Book { 
  title: string, 
  author: string, 
  publishedYear: number,
  genres: string[]
}

// Input: 

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  genres: ["Novel", "Historical"]
};

const verifyGenre = (book: Book, genre: string): boolean => { 
  // The includes() method checks if the array contains a specific value, returning true if found and false if not.
  return book.genres.includes(genre)
}

// Output: 

console.log(verifyGenre(myBook, 'Novel'))  // true
console.log(verifyGenre(myBook, 'Anime'))  // false