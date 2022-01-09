const {sequelize} = require('../data/connection');
console.log('reached aurthor services...');
const {Book}=sequelize.models;
const {Author}=sequelize.models;

const getAllAuthor=async()=>{
    const author = await Author.findAll();
    return author;
}

const getAllAuthorById=async(id)=>{
    const author = await Author.findOne({where: {id: id}});
    if(author)
        return author;
    else
        throw new Error('Author not found');

}

const addAuthor=async(author)=>{
    const dbAuthor = await Author.create(author);
    return dbAuthor;
}


const updateAuthorById = async(id,author)=>{
    const result = await deleteAuthorById(id);
    const dbBook = await addAuthor(author);
    return dbBook;
}

const deleteAuthorById = async(id)=>{
    const result = await author.destroy({
        where:{
            id:id
        }
    });
    if(result)
        return result;
    else
        throw new Error('Book does not exist');
}


const getBookByAuthor=async(id)=>{
    const author = await Author.findOne({where: {id: id}});
    const authorname = author.name;
    if(author)
    {
        const books = await Book.findAll({where: {author: authorname}});
        return books;
    }
    else
        throw new Error('Author not found');
}

module.exports ={
    getAllAuthor,
    getBookByAuthor, 
    getAllAuthorById,
    updateAuthorById,
    deleteAuthorById,
    addAuthor
}