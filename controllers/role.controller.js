const Role = require("../models/role");

const viewRoleUser = async (req, res) => {
  const roles = await Role.findAll();
  return res.render("role_user", {
    roles,
  });
};

const createRole = async (req, res) => {
  const { role } = req.body;

  await Role.create({
    role,
  });

  return res.status(301).redirect("/role");
};

const updatedRole = async (req, res) => {
  const { id, role } = req.body;

  await Role.update(
    {
      role: role,
    },
    {
      where: { id: id },
    }
  );
  return res.status(301).redirect("/role");
};

const deleteRole = async (req, res) => {
  const { id } = req.body;

  await Role.destroy({
    where: { id: id },
  });
  return res.status(301).redirect("/role");
};

module.exports = { viewRoleUser, createRole, updatedRole, deleteRole };
