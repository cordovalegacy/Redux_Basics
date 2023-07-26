
// !Warm up
const arrayOfBooks = ["Book1", "Book2", "Book3"]

const index = arrayOfBooks.indexOf("Book2")
const newArrayOfBooks = [...arrayOfBooks.slice(0, index), "Book4", ...arrayOfBooks.slice(-1)]

console.log("Index", index) //1
console.log("Array of Books", arrayOfBooks) //initial value
console.log("New Array of Books", newArrayOfBooks) //updated value

const book = {
    author: "Robert Kiyosaki",
    book: {
        name: "Rich Dad Poor Dad",
        price: "$8",
        rating: 4.7
    }
}

const newBook = {
    ...book,
    book: {
        ...book.book,
        price: "$10",
        rating: 5.0
    }
}


console.log("Book", book)
console.log("New Book", newBook)