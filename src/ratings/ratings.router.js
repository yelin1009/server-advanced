const router = require("express").Router();
const controller = require("./ratings.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:ratingId").get(controller.read);

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
