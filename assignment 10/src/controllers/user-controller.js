const service=require('../services/user-services');

const getAllUser=async (request,response)=>{
    try{
        const user=await service.getAllUser();
        response.json(user);
    }catch(error){
        response.status(400).json(error.message);
    }
}

const addUser=async (request,response, next)=>{
    try{
        const user=await service.addUser(request.body);
        response.status(201).send(user);
    }catch(error){
        response.status(400).json({message: error.message});
    }
}

const loginUser=async (request,response,next)=>{
    try{
        const user = await service.loginUser(request.body.username,request.body.password);
        response.status(200).json({message:"Login Successful",user});
    }
    catch(error){
        response.status(400).json({message: error.message});
    }
}


const getUserByEmail =async (request, response) => {
    try{
        const user = await service.getUserByEmail(request.params.email);
        response.json(user);
    }catch(error){
        response.status(404).json({message:error.message, email:request.params.email});
    }
}

const updateUserByEmail=async (request, response) => {
    try{
        var user_email = request.params.email;
        const user = await service.updateUserByEmail(user_email,request.body);
        response.status(200).json({message:`User with email ${user_email} successfully updated`});
    }catch(error){
        response.status(404).json({message:error.message, email:request.params.email});
    }
}

const updateUserPwdByEmail =async (request, response) => {
    try{
        var user_email = request.params.email;
        const user = await service.updateUserPwdByEmail(user_email,request.body.password);
        response.status(200).json({message:`Password of User with email ${user_email} successfully updated`});
    }catch(error){
        response.status(404).json({message:error.message, email:request.params.email});
    }
}

module.exports ={
    getAllUser,
    addUser,
    loginUser,
    getUserByEmail,
    updateUserByEmail,
    updateUserPwdByEmail
}