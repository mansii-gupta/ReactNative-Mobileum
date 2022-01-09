
//destructure the passed parameter to get the require fields

const Book= function ({title,author,price,rating,cover,isbn}) {

    //const {title,author,price,rating,cover,isbn}=bookData;
   
    this.isbn=isbn;
    this.title=title;
    this.author=author;
    this.cover=cover;
    this.rating=rating;
    this.price=price;

}