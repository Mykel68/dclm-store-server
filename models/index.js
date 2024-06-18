const dbConfig = require("./config/dbConfig");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database successfully!");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./userModel")(sequelize, DataTypes);

module.exports = db;
