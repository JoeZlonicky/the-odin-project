const addBookButton = document.querySelector('#top-bar__add_book_button');
const addBookDialog = document.querySelector('#add-dialog');
const addBookDialogForm = document.querySelector('#add-dialog__form');
const addBookDialogCloseButton = addBookDialog.querySelector('#add-dialog__close-button');
const addBookDialogAddButton = addBookDialog.querySelector('#add-dialog__add-button');
const addBookDialogTitleInput = addBookDialog.querySelector('#add-dialog__title-input');
const addBookDialogAuthorInput = addBookDialog.querySelector('#add-dialog__author-input');
const addBookDialogNPagesInput = addBookDialog.querySelector('#add-dialog__n-pages-input');
const addBookDialogReadInput = addBookDialog.querySelector('#add-dialog__read-input');

const searchInput = document.querySelector('#top-bar__search-field');
const cardContainer = document.querySelector('#card-container');
const cardTemplate = cardContainer.querySelector('template');

let books = [];
let bookToCardMap = new Map();
let bookIDCounter = 0;

function Book(title, author, nPages, read=false) {
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.read = read;
    this.id = bookIDCounter++;
}

function addBookToDisplay(book) {
    books.push(book);
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector('.card__title').textContent = book.title;
    card.querySelector('.card__author').textContent = book.author;
    card.querySelector('.card__n-pages').textContent = `${book.nPages} ${book.nPages === 1 ? 'page' : 'pages'}`;
    card.querySelector('.card__read-button').addEventListener('click', () => {
        toggleReadStatus(book);
    });
    card.querySelector('.card__trash-button').addEventListener('click', () => {
        removeBookFromDisplay(book);
    });
    card.setAttribute('book-id', book.id);
    if (book.read) {
        card.classList.add('read');
    }

    cardContainer.appendChild(card);
    bookToCardMap.set(book, card);
}

function removeBookFromDisplay(book) {
    const removeIndex = books.indexOf(book);
    books.splice(removeIndex, 1);
    const card = cardContainer.querySelector(`[book-id='${book.id}']`);
    cardContainer.removeChild(card);
    bookToCardMap.delete(book);
}

function toggleReadStatus(book) {
    book.read = !book.read;

    const card = bookToCardMap.get(book);
    if (book.read) {
        card.classList.add('read');
    } else {
        card.classList.remove('read');
    }
}

function updateSearchFilter(search) {
    bookToCardMap.forEach((card, book) => {
        if (search === '' || book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search)) {
            card.hidden = false;
            return;
        }
        card.hidden = true;
    });
}

addBookToDisplay(new Book('Mistborn: The Final Empire', 'Brandon Sanderson', 647));
addBookToDisplay(new Book('Mistborn: The Well of Ascension', 'Brandon Sanderson', 781));
addBookToDisplay(new Book('Mistborn: The Hero of Ages', 'Brandon Sanderson', 572));

addBookButton.addEventListener('click', () => {
    addBookDialog.showModal();
});

addBookDialogCloseButton.addEventListener('click', () => {
    addBookDialog.close();
});

addBookDialogAddButton.addEventListener('click', (event) => {
    if (!addBookDialogForm.checkValidity()) {
        return;
    }
    event.preventDefault();
    const newBook = new Book(addBookDialogTitleInput.value,
        addBookDialogAuthorInput.value,
        parseInt(addBookDialogNPagesInput.value),
        addBookDialogReadInput.checked
    );
    addBookToDisplay(newBook);
    addBookDialog.close();
    addBookDialogForm.reset();
});

searchInput.addEventListener('input', (e) => {
    updateSearchFilter(e.target.value.toLowerCase());
});