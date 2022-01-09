
const { Sequelize, DataTypes } = require('sequelize');
const{ sequelize} = require('../connection');

module.exports=(sequelize) =>{
    console.log('building the model User');
    sequelize.define(
        "User",
        {
            username: DataTypes.STRING,
            email:{
                type: DataTypes.STRING,
                primaryKey: true
            },
            password: DataTypes.STRING,
            photograph: DataTypes.STRING
        }
    );
      
} 

