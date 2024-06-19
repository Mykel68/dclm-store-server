module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    model_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    model_number: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    specifications: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Product;
};
