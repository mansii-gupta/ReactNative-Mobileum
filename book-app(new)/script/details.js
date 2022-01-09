
(

    function(){

        const params=getQueryParams();

        const isbn=params.isbn;
        let error;
        const bookManger=new BookManager();


        let book;
        if(!isbn){
            error=`
                    <h2>No ISBN Supplied</h2>
                    <p>Please supply isbn like
                        <a href="http://127.0.0.1:5500/details.html?isbn=1408855658">
                        http://127.0.0.1:5500/details.html?isbn=1408855658
                        </a>
                    <p>
                `
        } else {

            book=bookManger.getBookByIsbn(isbn);
            if(!book){
                error=`
                    <h2>No Book with ISBN ${isbn}</h2>
                    <a href='/'>Go Back to Book List</a>                
                `;
            }
        }

        const infoDiv=document.getElementById("info");
        const errorDiv=document.getElementById("error");

        if(error){
            errorDiv.innerHTML=error;
            errorDiv.style.display='block';
            infoDiv.style.display='none';
        } else{
            errorDiv.style.display='none';
            infoDiv.style.display='block';
            document.getElementById("book-title").innerHTML=book.title;
            document.getElementById("book-author").innerHTML=book.author;
            document.getElementById("book-details-cover").src=book.cover;
            document.getElementById("book-price").innerHTML=` ₹ ${book.price}`;
            document.getElementById("book-rating").innerHTML=`${book.rating} / 5`;
            document.getElementById("book-details").innerHTML=`${book.description}`;
        }

        

        console.log('book',book);

    }

)();