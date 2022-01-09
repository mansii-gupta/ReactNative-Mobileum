const {sequelize} = require('../data/connection');
const {Op} = require("sequelize");
const {User}= sequelize.models;

const getAllUser=async()=>{
    const user=await User.findAll();
    return user;
}

const addUser=async(user)=>{
    const dbUser= await User.create(user);
    return dbUser;
}

const loginUser=async(username, password)=>{
    const user= await User.findOne({
        where:{
            [Op.and]:{
                username:username,
                password:password
            }
        }
    });
    if(user)
        return user;
    else
        throw new Error('Incorrect Email Address or Password');
}


const getUserByEmail = async (email) => {
    const user= await user.findOne({
        where:{
            email:email
        }
    });
    if(user)
        return user;
    else
        throw new Error('User Not Found');
}

const updateUserByEmail = async (email,user) => {
    const result = await user.destroy({
        where:{
            email:email
        }
    });
    const dbUser = await addUser(user);
    return dbUser;
}

const updateUserPwdByEmail = async (email,pwd) => {
    const result = await user.update({password:pwd},{
        where: {
            email:email
        }
    });
    if(result[0])
        return result;
    else
        throw new Error('Invalid Email Id');
}


module.exports ={
    getAllUser,
    addUser,
    loginUser,
    getUserByEmail,
    updateUserByEmail,
    updateUserPwdByEmail
}