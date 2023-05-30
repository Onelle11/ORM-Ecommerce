const Sequelize = require('sequelize');

// All data from .env is loaded into process.env
require('dotenv').config();
/* require('dotenv').config({ path: 'path/to/.env' });
 */
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  });
}


module.exports = sequelize;