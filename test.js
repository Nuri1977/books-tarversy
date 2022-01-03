class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
}

const books = [
  {
    name: 'Game of thrones',
    author: 'Nuri'
  }
];

book1 = new Book ("Polka", "Alek");
book2 = new Book ("Polka2", "Alek2");
book3 = new Book ("Polka3", "Alek3");


books.push(book1);
books.push(book2);
books.push(book3);

console.log(book1.author);
console.log(books);

console.log(books[0]);