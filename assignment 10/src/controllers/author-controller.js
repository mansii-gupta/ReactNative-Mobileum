console.log('reached controller...');
const service=require('../services/author-services');
console.log('connected to author service...');

const getAllAuthor=async(request,response)=>{
    try{
        const author = await service.getAllAuthor();
        response.json(author);
    }
    catch(error){
        response.status(400).json(error.message);
    }
}

const addAuthor=async (request, response, next) => {
    try{
        const author=await service.addAuthor(request.body);
        response.status(201).send(author);
    } catch(error){
        response.status(400).json({message: error.message});
    }
}


const getAllAuthorById=async (request,response)=>{
    try{
        const author=await service.getAllAuthorById(request.params.id);
        response.json(author);
    }catch(error){
        response.status(404).json({message:error.message, id:request.params.id});
    }
}

const updateAuthorById = async (request, response) => {
    try{
        
        const author = await service.updateAuthorById( request.params.id,request.body);
        response.status(200).json({message:`Author with id ${ request.params.id} successfully updated`});
    }catch(error){
        response.status(404).json({message:error.message, id:request.params.id});
    }
}

const deleteAuthorById = async (request, response)=>{
    try{
        const author = await service.deleteAuthorById(request.params.id);
        response.status(200).json({message:`Author with id ${request.params.id} successfully deleted`});
    }catch(error){
        response.status(404).json({message:error.message, id:request.params.id});
    }
}


const getBookByAuthor=async(request,response)=>{
    try{
        const book=await service.getBookByAuthor(request.params.id);
        response.status(200).json(book);
    }catch(error){
        response.status(404).json({message:error.message,  id:request.params.id });
    }

    module.exports={
        getAllAuthor,
        addAuthor,
        getAllAuthorById,
        updateAuthorById,
        deleteAuthorById,
        getBookByAuthor
    }
}