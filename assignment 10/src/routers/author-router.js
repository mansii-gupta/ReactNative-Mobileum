const express= require('express');
const {getAllAuthor, addAuthor, getAllAuthorById, updateAuthorById, deleteAuthorById, getBookByAuthor} = require('../controllers/author-controller');

module.exports=()=>{

    console.log('connected to exports...');

    var router=express.Router();
    
    console.log('connected to express router');
    router
         .route("/")
         .get(getAllAuthor)
         .post(addAuthor); 

    router
        .route("/:id")
        .get(getAllAuthorById)
        .put(updateAuthorById)
        .delete(deleteAuthorById);
        console.log('connected to router2...');

    router
        .route("/:id/books")
        .get(getBookByAuthor);
        console.log('connected to router3...');
    

    return router;


};