// model linked with database in util
const Sequelize= require('sequelize');

const sequelize= require('../util/database');

const User= sequelize.define('users',  {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    phoneNo: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
    }
});

module.exports= User;