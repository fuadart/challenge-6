"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class history_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  history_game.init(
    {
      id: DataTypes.INTEGER,
      nama_game: DataTypes.STRING,
      waktu_penyelesaian: DataTypes.STRING,
      skor_game: DataTypes.TEXT,
      users_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "history_game",
    }
  );
  return history_game;
};
module.exports = History;
