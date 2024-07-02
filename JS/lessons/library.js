

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Library {
    constructor() {
        this.books = []
    }

    addBook(book){
        this.books.push(book)
    }

    removeBook(isbn){
        this.books = this.books.filter(item => item.isbn !== isbn)
    }

    listBooks(){
        this.books.forEach(book => {
            console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`);
        })
    }
}

const myLibrary = new Library()

const book1 = new Book('1984', 'Orwell', '12')
const book2 = new Book('PokeFetish', 'Great', '13')
const book3 = new Book('Poke', 'bob', '14')
const book4 = new Book('oh My', 'Bill', '15')
const book5 = new Book('Stuff', 'Phillip', '16')
myLibrary.addBook(book1)
myLibrary.addBook(book2)
myLibrary.addBook(book3)
myLibrary.addBook(book4)
myLibrary.addBook(book5)

myLibrary.listBooks()
console.log(myLibrary)

console.log(myLibrary.removeBook('14'))
// myLibrary.listBooks()


console.log(myLibrary)