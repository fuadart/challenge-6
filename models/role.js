const sequelize = require("./sequelize");
const { Model, DataTypes } = require("sequelize");

class Role extends Model {}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "role",
    timestamps: false,
  }
);

module.exports = Role;
