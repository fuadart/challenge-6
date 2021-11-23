const Role = require("../models/role");
const bcrypt = require("bcrypt");
const User = require("../models/user_game");

const viewUserGame = async (req, res) => {
  const roles = await Role.findAll();
  const users = await User.findAll();
  return res.render("user_game", {
    roles,
    users,
  });
};

const createUserGame = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    if (!password || password.length < 8) {
      throw {
        message: `password min length 8 character`,
        code: 400,
        error: `bad request`,
      };
    }

    const isExist = await User.findOne({
      where: {
        username,
      },
    });

    if (isExist) {
      throw {
        message: `username already exists`,
        code: 400,
        error: `bad request`,
      };
    }

    const passwordHash = await bcrypt.hash(password, 12);

    await User.create({
      username: username,
      password: passwordHash,
      role_id: role,
    });

    return res.status(301).redirect("/menu/user-game");
  } catch (error) {
    next(error);
  }
};

const updatedUserGame = async (req, res) => {
  const { id, username, role } = req.body;

  await User.update(
    {
      username: username,
      role_id: role,
    },
    {
      where: { id: id },
    }
  );
  return res.status(301).redirect("/menu/user-game");
};

const deletedUserGame = async (req, res) => {
  const { id } = req.body;

  await User.destroy({
    where: { id: id },
  });
  return res.status(301).redirect("/menu/user-game");
};

module.exports = { viewUserGame, createUserGame, updatedUserGame, deletedUserGame };
