const { Router } = require("express");
const controller = require("../controllers/auth.controller");
const role = require("../controllers/role.controller");
const dashboard = require("../controllers/dashboard.controller");
const usergame = require("../controllers/usergame.controller");
const history = require("../controllers/historygame.controller");
const biodata = require("../controllers/biodatagame.controller");

const routers = Router();

routers.get("/", controller.viewAuth);
// routers.get("/login", controller.viewLogin);
routers.get("/dashboard", dashboard.viewDashboard);

routers.post("/create-user", controller.createRegister);
routers.post("/create-login", controller.createLogin);

// Usergame
routers.get("/menu/user-game", usergame.viewUserGame);
routers.post("/menu/user-game/create-usergame", usergame.createUserGame);
routers.post("/menu/user-game/updated-usergame", usergame.updatedUserGame);
routers.post("/menu/user-game/deleted-usergame", usergame.deletedUserGame);

// History Game
routers.get("/history", history.viewUserHistory);
routers.post("/history/add", history.createUserHistory);
routers.post("/history/edit", history.updatedUserHistory);
routers.post("/history/delete", history.deletedUserHistory);

// Biodata Game
routers.get("/biodata", biodata.viewUserBiodata);
routers.post("/biodata/add", biodata.createUserBiodata);
routers.post("/biodata/edit", biodata.updatedUserBiodata);
routers.post("/biodata/delete", biodata.deletedUserBiodata);

// Role
routers.get("/role", role.viewRoleUser);
routers.post("/create-role", role.createRole);
routers.post("/updated-role", role.updatedRole);
routers.post("/delete-role", role.deleteRole);

module.exports = routers;
