const BookManager=function(){

    this.db=[];

    this.addBook=function(book){
        this.db[this.db.length]=book;
    }

    this.addBooks=function(...books){
        this.db=[...this.db,...books];
    }

    this.getAllBooks=function(){
        return this.db;
    }

    this.getBooksByAuthor=function(author){
        author=author.toLowerCase();        
       return this.db.search(b=>b.author.toLowerCase().includes(author));
    }


    this.getBooksInPriceRange=function(min,max){

        return this.db.search( b=>b.price>=min && b.price<=max);
    }

    this.getBooksByRating=function(minRating){
        return this.db.search(b=>b.rating>=minRating);
    }

    this.getBookByIsbn=function(isbn){
        return this.db.book.find(b=>b.isbn===isbn);
    }

    this.getBooksByTitle=function(title){
        title=title.toLowerCase();
        return this.db.filter( b=> b.title.toLowerCase().includes(title));
    }

    this.removeBook=function(isbn){
        //TODO: implement this logic
    }

    this.updateBook=function(book){
        //TODO: implement this logic
    }

};