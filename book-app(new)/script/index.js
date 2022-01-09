

(

    function() {

      

        const manager = new BookManager();

        let books = seedData.map(d => new Book(d));

       


        const searchText = document.getElementById('search-text');
        const searchType = document.getElementById('search-type');
        const searchButton = document.getElementById('search-button');
        const bookList = document.getElementById('book-list');

        function populateList(books) {
            bookList.innerHTML = '';

            books.forEach(book => {

                bookList.innerHTML += `
                <tr id="${book.isbn}">
                    <td>
                        <img src='${book.cover}'/>
                    </td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>₹${book.price}</td>
                    <td>${book.rating}</td>
                    <td>
                        <a class='action-link' href="/details.html?isbn=${book.isbn}" >details</a>
                        <a class='action-link' href="/edit.html?isbn=${book.isbn}"> edit</a>
                        <a class='action-link danger' onClick="deleteBook(${book.isbn})" href="#" > delete</a>
                    </td>
                </tr>
                
                `;

            });

        }

        window.deleteBook=(isbn)=>{
            console.log('deleting',isbn);
            manager.removeBook(isbn);
            //window.location.reload();
            //remove the row containing this book
            //no need to reload the whole page
            document.getElementById(isbn.toString()).remove();
        }

        document.body.onload = function () {
            const books = manager.getAllBooks();
            populateList(books);
        }

        function handleSearch() {
            const type = searchType.value;
            const text = searchText.value;
            let result = [];
            switch (type) {
                case "title":
                    result = manager.getBooksByTitle(text);
                    break;
                case 'author':
                    result = manager.getBooksByAuthor(text);
                    break;
                case 'rating':
                    result = manager.getBooksByRating(+text);
                    break;
                case 'isbn':
                    const book = manager.getBookByIsbn(text);
                    if (book)
                        result = [book];
                    break;
                case 'price':
                    let [min,max]=text.split('-'); //[200,300]
                    min= +min;
                    max= +max;
                    
                    console.log(`min ${typeof min} '${min}'`);
                    console.log(`max ${typeof max} '${max}'`);
                    
                    result=manager.getBooksInPriceRange(min,max);
            }

            populateList(result);
        }

        searchButton.onclick = handleSearch;


    }


)();
