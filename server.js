const dbConfig = require("./config/dbConfig");
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const storeItemRoutes = require("./routes/storeItemRoutes");
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
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/store-items", storeItemRoutes);

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "DCLM Store API",
      version: "1.0.0",
      description:
        "API Documentation for DCLM Store Application made with express and sequelize",
      contact: {
        name: "DCLM Team",
        url: "https://www.dclm.com",
        email: "dclmtech@gmail.com",
      },
      servers: ["http://localhost:5000"],
    },
    schemes: ["http", "https"],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerjsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
