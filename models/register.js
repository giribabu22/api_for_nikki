const connection = require('../db/connection')
const {DataTypes} = require('sequelize')

module.exports = connection.define('register',{
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type:DataTypes.STRING(600),
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    phone_no:{
        type:DataTypes.STRING,
    }
})