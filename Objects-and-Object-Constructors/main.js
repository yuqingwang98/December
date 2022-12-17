let myLibrary = []

const $name = document.querySelector("#name");
const $author = document.querySelector("#author");
const $status = document.querySelector("#status");
const $tableBody = document.querySelector("#book-table-body");
const $form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.readOrNot= status;
  this.read = function(){
    return `${this.name} by ${this.author}, with ${this.pages} pages, ${status}.`
  }
}

function addBookToLibrary() {
  if ($name.value.length === 0 || $author.value.length === 0) {
    alert("Please, fill all the fields");
    return;
  }
  const newBook = new Book($name.value, $author.value, $status.value);

  myLibrary.push(newBook);
}

let favBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

console.log(favBook.read());
