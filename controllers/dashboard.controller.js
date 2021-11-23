const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user_game");

const viewDashboard = (req, res) => {
  return res.render("dashboard");
};

module.exports = { viewDashboard };
