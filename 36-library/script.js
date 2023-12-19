const library = []
const bookContainer = document.querySelector('.book-container')

function Book(title, author, nPages, read) {
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.read = read;
}

function addBookToLibrary(book) {
    library.push(book);

    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    
    let titleLabel = document.createElement('div');
    titleLabel.classList.add('book-div__title-label');
    titleLabel.textContent = book.title + ' by ' + book.author;
    bookDiv.appendChild(titleLabel);

    let nPagesLabel = document.createElement('div');
    nPagesLabel.classList.add('book-div__n-pages-label');
    nPagesLabel.textContent = book.nPages + ' pages';
    bookDiv.appendChild(nPagesLabel);

    let readCheckbox = document.createElement('input');
    readCheckbox.classList.add('book-div__read-checkbox');
    readCheckbox.setAttribute('type', 'checkbox');
    readCheckbox.checked = book.read;
    bookDiv.appendChild(readCheckbox);

    bookContainer.appendChild(bookDiv);
}

addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 400, false));
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 400, false));
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 400, false));