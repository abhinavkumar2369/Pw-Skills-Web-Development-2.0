function arrangeBooks(books, callback) {
    let titles = books.map(book => book.title);
    titles.sort();
    callback(titles);
}

function logTitles(titles) {
    console.log("Titles in alphabetical order:", titles.join(", "));
}

let books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 }
];

arrangeBooks(books, logTitles);
