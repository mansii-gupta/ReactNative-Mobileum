const express= require('express');


module.exports=()=>{

    const router=express.Router();

    router
        .route("/")
        .get((request,response)=>{
            response.send([{name:"Author 1,"},{title:"Author 2"},{title:"Author 3"}])
        })
        .post((request,response)=>{
            response.send({id:'new-author',name:'New Author',status:'created'});
        });

    
    router
        .route("/:id")
        .get((request,response)=>{
            const {id}=request.params;
    
            response.send({id,title:'Dummy Name'});
        })
        .put((request,response)=>{
            const {id}=request.params;
    
            response.send({id: id,title:'Dummy Name',status:'udpated'});
        })
        .delete((request,response)=>{
            const {id}=request.params;
    
            response.send({id,name:'Dummy Author',status:'deleted'});
        });
        


    


    return router;

};
