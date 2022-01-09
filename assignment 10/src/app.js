const express= require('express');
const path=require('path');
const db=require('./data/setup'); //must setup data before setting routes.
const getBookRouter=require('./routers/books-router');
const getAuthorRouter=require('./routers/author-router');
const getUserRouter=require('./routers/user-router');

const configureMiddlewares=async(app,baseDir)=>{
    app.use(express.static(path.join(baseDir, 'public')));
    app.use(express.json());
    app.use(express.urlencoded({ extended:true}));
};

const configureRoutes=async(app)=>{

    app.use('/api/books', getBookRouter());
    console.log('connected to Books...');
    app.use('/api/author', getAuthorRouter());
    console.log('connected to Author...');
    app.use('/api/user' , getUserRouter());
    console.log('connected to Users..');
};


const createApp=async(baseDir)=>{

    await db.setup();
    console.log('connected to database server...');

    const app= express();

    await configureMiddlewares(app,baseDir);
    console.log('connected to middleware...');
    await configureRoutes(app);
    console.log('connected to routes...');
    return app;
}


module.exports = {
    createApp
}