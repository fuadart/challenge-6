const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user_game");

const { APP_SECRET } = process.env;

const createToken = (id) => {
  return jwt.sign({ id }, APP_SECRET, { expiresIn: "7 days" });
};

const viewAuth = (req, res) => {
  return res.render("auth");
};

const createRegister = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);

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

    const user = await User.create({
      username,
      password: passwordHash,
    });

    const token = await createToken(user.id);

    return res.status(301).redirect("/");
  } catch (error) {
    next(error);
  }
};

const createLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    if (!username) {
      throw {
        message: `username must be valid`,
        code: 400,
        error: `bad request`,
      };
    }

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

    if (!isExist) {
      throw {
        message: `User Not Found`,
        code: 404,
        error: `bad request`,
      };
    }

    const isMatch = await bcrypt.compare(password, isExist.password);

    if (!isMatch) {
      throw {
        message: `Wrong Password`,
        code: 404,
        error: `bad request`,
      };
    }

    const token = await createToken(isExist.id);

    return res.status(301).redirect("/dashboard");
  } catch (error) {
    next(error);
  }
};

module.exports = { createToken, viewAuth, createRegister, createLogin };
