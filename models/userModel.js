module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      allowNull: false,
      defaultValue: "user",
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return User;
};
