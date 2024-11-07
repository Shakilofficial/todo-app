const Todo = require('../models/todoModel');
const { uploadOnCloudinary } = require('../utils/cloudinary');

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
    res.status(500).json({ error: "Failed to create todo", message: error.message });
    }  
};

module.exports = {
  createTodo,
};
