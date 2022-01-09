const express= require('express');
const {addBook,getAllBooks,getBookByIsbn} =require('../controllers/books-controller');


module.exports=()=>{

    const router=express.Router();
    
    router
        .route("/")
        .get(getAllBooks)
        .post(addBook);

    
    router
        .route("/:isbn")
        .get(getBookByIsbn)
        //.put()
        //.delete()
        
        ;
        
    return router;

};
