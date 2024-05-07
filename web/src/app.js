const doks = {
    bookBody: document.querySelector('#bookBody')
}

const state = {books:[]}

const url = 'http://localhost:3000/books'

function getTheBooks(){
    fetch(url)
    .then((response)=>response.json())
    .then(result =>{
        state.books = result;
        renderTable();
    })
}

function renderTable(){
    state.books.forEach(book =>{
        var tabrow = document.createElement('tr');
        tabrow.innerHTML = `
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.price}</td>
        `;
        doks.bookBody.append(tabrow);
    })
}

getTheBooks();