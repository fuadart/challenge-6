"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class biodata_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  biodata_game.init(
    {
      id: DataTypes.INTEGER,
      nama: DataTypes.STRING,
      alamat: DataTypes.TEXT,
      no_hp: DataTypes.STRING,
      email: DataTypes.STRING,
      users_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "biodata_game",
    }
  );
  return biodata_game;
};

module.exports = Biodata;
