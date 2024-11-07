const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  assignee: { type: String, required: true },
  description: { type: String, required: true },
  progress: { type: String, required: true },
  comments: { type: Number, default: 0 },
  members: { type: Number, default: 0 },
  attachments: [{ type: String }], // URLs of uploaded images
  date: { type: Date, default: Date.now },
  clientAvatar: { type: String, required: true },
  assigneeAvatar: { type: String, required: true },
  priority: { type: String, enum: ["low", "medium", "high"], required: true },
});

module.exports = mongoose.model("Todo", todoSchema);
