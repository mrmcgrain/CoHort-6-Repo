

// Exercise: Create a simple Library system where:
// A Book class has properties like title, author, and ISBN.
// A Library class can add, remove, and list books.
// Implement encapsulation to protect book details.

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}

class Library {
    constructor() {
        this.books = []
    }

    addBook(book) {
        this.books.push(book)
    }

    removeBooks(isbn){
        this.books = this.books.filter(item => item.isbn !== isbn)
    }

    listBooks(){
        this.books.forEach((item) => {
            console.log(`${item.title} by ${item.author} (ISBN: ${item.isbn})`);
            // console.log(book.title + " " + "by" + " " + book.auther )
        })
    }
}

const myLibrary = new Library()

const book1 = new Book("1984", "Orwell", "10")
const book2 = new Book("Hello", "World", "11")
const book3 = new Book("JS is Fun ", "haha", "12")
const book4 = new Book("OOP is confussing", "Me", "13")
myLibrary.addBook(book1)
myLibrary.addBook(book2)
myLibrary.addBook(book3)
myLibrary.addBook(book4)

console.log(myLibrary)
// myLibrary.listBooks()
myLibrary.removeBooks('12')
console.log('******************************')
console.log(myLibrary)
// myLibrary.listBooks()
