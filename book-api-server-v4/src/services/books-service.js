const {sequelize} = require('../data/connection');

//console.log('sequelize.models',sequelize.models);

const {Book} =sequelize.models;


//console.log('db',db);
const getAllBooks=async()=>{

    //const result=await db.query('SELECT * FROM books');
    //console.log('result',result);

    const books=await Book.findAll();

    return books;

}

const getBookByIsbn=async(isbn)=>{
    
    const book= await Book.findOne({where:{isbn:isbn}});
    if(book)
        return book;
    else
        throw new Error('Book Not Found');
}

const addBook=async(book)=>{

    //const dbBook=new Book(book);
    //await dbBook.save(); //this will save the book in the database    
    const dbBook=await Book.create(book); //create and save to data base
    return dbBook;
}

module.exports={
    getAllBooks,
    getBookByIsbn,
    addBook
}