const sequelize = require("./sequelize");
const { Model, DataTypes } = require("sequelize");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: "role",
          key: "id",
        },
      },
    },
  },
  {
    sequelize,
    tableName: "user_game",
    timestamps: false,
  }
);

module.exports = User;
