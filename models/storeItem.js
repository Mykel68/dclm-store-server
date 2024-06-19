module.exports = (sequelize, DataTypes) => {
  const StoreItem = sequelize.define("StoreItem", {
    store_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_serial_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purchase_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    warranty_expiration_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return StoreItem;
};
