const express= require('express');


module.exports=()=>{

    const router=express.Router();
    
    router
        .route("/")
        .get((request,response)=>{
            response.send([{title:"book1,"},{title:"book2"},{title:"book3"}])
        })
        .post((request,response)=>{
            response.send({isbn:'new-isbn',title:'Dummy Title',status:'created'});
        });

    
    router
        .route("/:isbn")
        .get((request,response)=>{
            const {isbn}=request.params;
    
            response.send({isbn,title:'Dummy Title'});
        })
        .put((request,response)=>{
            const {isbn}=request.params;
    
            response.send({isbn,title:'Dummy Title',status:'udpated'});
        })
        .delete((request,response)=>{
            const {isbn}=request.params;
    
            response.send({isbn,title:'Dummy Title',status:'deleted'});
        });
        
    return router;

};
