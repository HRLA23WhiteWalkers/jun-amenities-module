const mysql = require('mysql');
const Sequelize = require('sequelize');

const connection = new Sequelize('amenities_module', 'root', 'junkim123', {
  host: 'localhost',
  dialect: 'mysql'
});

connection
  .authenticate()
  .then(() => console.log('MYSQL is Up and Running!!'))
  .catch(err => console.error(err));

module.exports = connection;
