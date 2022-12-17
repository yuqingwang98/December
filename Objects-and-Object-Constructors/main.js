let myLibrary = []

const $name = document.querySelector("#name");
const $author = document.querySelector("#author");
const $status = document.querySelector("#status");
const $tableBody = document.querySelector("#book-table-body");
const $form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

class Book {
  constructor(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;}
  }

function addBookToLibrary() {
  if ($title.value.length === 0 || $author.value.length === 0) {
    alert("Please, fill all the fields");
    return;
  }
  const newBook = new Book($title.value, $author.value, $pages.value, $status.value);

  myLibrary.push(newBook);
}d

function changeStatus(book) {
  if (library[book].status === "read") {
    library[book].status = "not read";
  } else library[book].status = "read";
}

function deleteBook(currentBook) {
  library.splice(currentBook, currentBook + 1);
}

let favBook = new Book("The Hobbit", "J.R.R. Tolkien", "259", "not read");

console.log(favBook.read());
