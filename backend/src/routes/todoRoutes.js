const express = require("express");
const { createTodo } = require("../controllers/todoController");
const { upload } = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.get("/", (req, res) => res.send("Welcome to Todo App API"));

// Add the POST route for creating a todo
router.post("/todos", upload.array('attachments'), createTodo);

module.exports = router;
