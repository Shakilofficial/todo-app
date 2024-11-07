const express = require("express");
const {getAllTodo,getSingleTodo, createTodo } = require("../controllers/todoController");
const { upload } = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.get("/", (req, res) => res.send("Welcome to Todo App API"));

router.get("/todos", getAllTodo); //GET route for retrieving all todos
router.get("/todos/:id", getSingleTodo); //GET route for retrieving a single todo
router.post("/todos", upload.array('attachments'), createTodo); //POST route for creating a todo

module.exports = router;
