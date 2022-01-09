const {sequelize} = require('../data/connection');
const {Op} = require("sequelize");
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

const updateBook = async(isbn,book1)=>{
    const result = await deleteBook(isbn);
    const dbBook = await addBook(book1);
    return dbBook;
}

const deleteBook = async(isbn)=>{
    const result = await book.destroy({
        where:{
            isbn:isbn
        }
    });
    if(result)
        return result;
    else
        throw new Error(`Book does not exist`);
}

const getInPriceRange = async(min,max)=>{
    console.log(`min:${min} and max:${max}`);
    const books = await book.findAll({
        where:{
            price:{
                [Op.and]:{
                    [Op.gte]:min,
                    [Op.lte]:max
                }
            }
        }
    });
    return books;
}

const getInRatingRange = async(min,max)=>{
    const books = await book.findAll({
        where:{
            rating:{
                [Op.and]:{
                    [Op.gte]:min,
                    [Op.lte]:max
                }
            }
        }
    });
    return books;
}
module.exports={
    getAllBooks,
    getBookByIsbn,
    addBook,
    updateBook,
    deleteBook,
    getInPriceRange,
    getInRatingRange
}