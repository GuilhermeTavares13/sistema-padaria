const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistema-gestao','root','senha',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;