
const express= require('express');
const bookService=require('./book-service');
const configureBookRoute=require('./book-routes');


const port=4000;


const start=async()=>{

    //step 1: load data from database
    await bookService.loadBooks();
    console.log('books loaded from database...');

    
    //step 2. creates an express app instance
    const app = express();

    //step 3. configure my routes
    configureBookRoute(app);

    //step 4. start the server
    const server=app.listen(port, _=>{ 
            console.log(`server started: http://localhost:${port}`);
    });
        
    server.on('error',error=>console.error('error:',error.message))
}

start();






