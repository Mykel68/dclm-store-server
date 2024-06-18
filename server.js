const dbConfig = require("./config/dbConfig");

const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const Sequelize = require("sequelize");
const PORT = process.env.PORT || 5000;
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
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database successfully!");
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
app.use(cors());
app.use(express.json());
