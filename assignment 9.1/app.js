
const fs= require('fs');
const http=require('http');
const express=require('express');
let books=[];
const app=express();
const port=4000;
const server= app.listen(port, _=>{
    console.log(`server started: http://localhost:${port}`)
});
fs.readFile("books.json",function(error,data){
    if (error) throw error;
    books=JSON.parse(data);
    console.log(books);

});

server.on('error', error=>console.error('error', error.message))

app.get('/api/books',(request,response)=>{
    response.send(books);
});



app.post('/api/books',(request,response)=>{
    response.send(books);
});

app.get('/api/books/:isbn',(request,response)=>{

    const isbn= request.params.isbn;
    const book=books.find(b=>b.isbn==isbn);
    if(book)
        response.send(book);
    else
        response.status(404).send({message:'Book not found', isbn});

});