const Biodata = require("../models/biodata_game");
const User = require("../models/user_game");

const viewUserBiodata = async (req, res) => {
  const biodata = await Biodata.findAll();
  const users = await User.findAll();
  return res.render("biodatagame", {
    biodata,
    users,
  });
};

const createUserBiodata = async (req, res) => {
  try {
    const { nama, alamat, no_hp, email, users_id } = req.body;

    await Biodata.create({
      nama: nama,
      alamat: alamat,
      no_hp: no_hp,
      email: email,
      users_id: users_id,
    });

    return res.status(301).redirect("/biodata");
  } catch (error) {
    next(error);
  }
};

const updatedUserBiodata = async (req, res) => {
  const { id, nama, alamat, no_hp, email, users_id } = req.body;

  await Biodata.update(
    {
      nama: nama,
      alamat: alamat,
      no_hp: no_hp,
      email: email,
      users_id: users_id,
    },
    {
      where: { id: id },
    }
  );
  return res.status(301).redirect("/biodata");
};

const deletedUserBiodata = async (req, res) => {
  const { id } = req.body;

  await Biodata.destroy({
    where: { id: id },
  });
  return res.status(301).redirect("/biodata");
};

module.exports = { viewUserBiodata, createUserBiodata, updatedUserBiodata, deletedUserBiodata };
