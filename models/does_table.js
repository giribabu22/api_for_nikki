const connection = require('../db/connection');
const {DataTypes} = require('sequelize');

module.exports = connection.define('does_table',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    start_at: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    end_at: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})