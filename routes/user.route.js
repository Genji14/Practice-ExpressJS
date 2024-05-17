const express = require("express");
const users = require("../controllers/user.controller");
const router = express.Router();

router.route("/add").post(users.insert);
router.route("/:username").delete(users.delete);
router.route("/:username").patch(users.update);
router.route("/search").get(users.search);

module.exports = router;