const Todo = require("../models/todoModel");
const { uploadOnCloudinary } = require("../utils/cloudinary");

//Get all todos
const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve todos", message: error.message });
  }
};

//Get single todo
const getSingleTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve todo", message: error.message });
  }
};

//Create todo
const createTodo = async (req, res) => {
  try {
    const {
      clientName,
      assignee,
      description,
      progress,
      comments,
      members,
      date,
      priority,
      clientAvatar,
      assigneeAvatar,
    } = req.body;

    // Upload attachments to Cloudinary
    const attachmentUrls = await Promise.all(
      req.files.map(async (file) => {
        const result = await uploadOnCloudinary(file.path);
        return result.secure_url;
      })
    );

    const todo = new Todo({
      clientName,
      assignee,
      description,
      progress,
      comments,
      members,
      attachments: attachmentUrls,
      date,
      clientAvatar,
      assigneeAvatar,
      priority,
    });

    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create todo", message: error.message });
  }
};

//Update todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // If there are files to upload, handle them
    if (req.files && req.files.length > 0) {
      const attachmentUrls = await Promise.all(
        req.files.map(async (file) => {
          const result = await uploadOnCloudinary(file.path);
          return result.secure_url;
        })
      );
      updateData.attachments = attachmentUrls;
    }

    const updatedTodo = await Todo.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update todo", message: error.message });
  }
};

module.exports = {
  getAllTodo,
  getSingleTodo,
  createTodo,
  updateTodo,
};
