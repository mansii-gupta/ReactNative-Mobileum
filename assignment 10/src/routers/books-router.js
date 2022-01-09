const express= require('express');
const {addBook,getAllBooks,getBookByIsbn, updateBook,deleteBook , getInPriceRange , getInRatingRange} = require('../controllers/books-controller');


module.exports=()=>{

    var router=express.Router();
    
    router
        .route("/")
        .get(getAllBooks)
        .post(addBook);

    
    router
        .route("/:isbn")
        .get(getBookByIsbn)
        .put(updateBook)
        .delete(deleteBook); 

    router
        .route("/pricerange/:min/:max")
        .get(getInPriceRange);
    
    router
        .route("/ratingrange/:min/:max")
        .get(getInRatingRange);
        
    return router;

};
