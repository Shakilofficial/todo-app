const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("Welcome to Todo App API"));

module.exports = router;
