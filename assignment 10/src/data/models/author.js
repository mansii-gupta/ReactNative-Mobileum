const { Sequelize, DataTypes } = require('sequelize');
// const { sequelize } = require('../connection');


module.exports=(sequelize) =>{
    console.log('building the model Author');
    
      
    sequelize.define(
    "Author",
    {
       name: DataTypes.STRING,
       id:{
           type: DataTypes.STRING, 
           primaryKey: true
        },
        biography: DataTypes.STRING(10000),
        photograph: DataTypes.STRING

        }
    );
} 

