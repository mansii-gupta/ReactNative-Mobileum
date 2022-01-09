const express=require('express');
const { getAllUser, addUser, loginUser, getUserByEmail,updateUserByEmail,updateUserPwdByEmail}= require('../controllers/user-controller');

module.exports=()=>{

    const router=express.Routers();

    router
        .route("/")
        .get(getAllUser)
        .post(addUser);

    router
         .route("/login")
         .post(loginUser);

    router
         .route("/:email")
         .get(getUserByEmail)
         .put(updateUserByEmail)
         .patch(updateUserPwdByEmail);

    return router;
    
};
