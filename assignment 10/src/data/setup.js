const {Sequelize, DataTypes}=require('sequelize');
const {sequelize} = require('./connection');

//write a require for each your model like below
require('./models/book')(sequelize);
require('./models/author')(sequelize);
require('./models/user')(sequelize);



const setup=async()=>{

    //automatically create the tables if not exists
    //force true will drop table and recreate
    await sequelize.sync({
        //force:true, //this will drop current tables and reacreate them
    }); 
}


module.exports={setup};