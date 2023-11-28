const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root', 'Kom@l111', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;