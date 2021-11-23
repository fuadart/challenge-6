const History = require("../models/history_game");
const bcrypt = require("bcrypt");
const User = require("../models/user_game");

const viewUserHistory = async (req, res) => {
  const history = await History.findAll();
  const users = await User.findAll();
  return res.render("history", {
    history,
    users,
  });
};

const createUserHistory = async (req, res) => {
  try {
    const { nama_game, waktu_penyelesaian, skor_game, users_id } = req.body;

    await History.create({
      nama_game: nama_game,
      waktu_penyelesaian: waktu_penyelesaian,
      skor_game: skor_game,
      users_id: users_id,
    });

    return res.status(301).redirect("/history");
  } catch (error) {
    next(error);
  }
};

const updatedUserHistory = async (req, res) => {
  const { id, nama_game, waktu_penyelesaian, skor_game, users_id } = req.body;

  await History.update(
    {
      nama_game: nama_game,
      waktu_penyelesaian: waktu_penyelesaian,
      skor_game: skor_game,
      users_id: users_id,
    },
    {
      where: { id: id },
    }
  );
  return res.status(301).redirect("/history");
};

const deletedUserHistory = async (req, res) => {
  const { id } = req.body;

  await History.destroy({
    where: { id: id },
  });
  return res.status(301).redirect("/history");
};

module.exports = { viewUserHistory, createUserHistory, updatedUserHistory, deletedUserHistory };
