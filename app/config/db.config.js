

const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Depart = require('../models/Depart.model.js')(sequelize, Sequelize);
db.Employee = require('../models/Depart.model.js')(sequelize, Sequelize);
db.Customer = require('../models/Depart.model.js')(sequelize, Sequelize);
db.Supplier = require('../models/Depart.model.js')(sequelize, Sequelize);
db.Product = require('../models/Depart.model.js')(sequelize, Sequelize);
db.Invoice = require('../models/Depart.model.js')(sequelize, Sequelize);
 
module.exports = db;