const express = require("express");
const {
  userCreateController,
  userGetController,
} = require("../Controller/Controller");
const router = express.Router();

router.post("/user", userCreateController);
router.get("/user", userGetController);
module.exports = router;
