/* eslint-disable no-undef */
import { useUpdateTodoMutation } from "@/features/api/apiSlice";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";

const AttachmentDialog = ({ isOpen, onClose, attachments, todoId }) => {
  const [files, setFiles] = useState([]);
  const [updateTodo, { isError, isLoading, isSuccess }] =
    useUpdateTodoMutation();

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData instance and append files
    const formData = new FormData();
    files.forEach((file) => formData.append("attachments", file));

    try {
      await updateTodo({ id: todoId, data: formData });
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  // React to mutation states with side effects
  useEffect(() => {
    if (isSuccess) {
      toast.success("Files uploaded successfully");
      onClose();
    }

    if (isError) {
      toast.error("Failed to upload files. Please try again.");
    }
  }, [isSuccess, isError, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogTitle>Attachments</DialogTitle>
        <DialogDescription>
          Here are the attachments for this task. Click to view larger.
        </DialogDescription>
        <div className="flex flex-wrap gap-4 mt-4">
          {attachments.map((attachment, index) => (
            <img
              key={index}
              src={attachment}
              alt={`Attachment ${index + 1}`}
              className="w-24 h-24 rounded-md object-cover"
            />
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <div className="flex items-center justify-between text-center">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700"
            >
              Upload file
            </label>
            <input
              type="file"
              id="file"
              name="file"
              multiple
              onChange={handleFileChange}
              className="block mt-2"
            />
          </div>
          <Button type="submit" className="mt-4" disabled={isLoading}>
            {isLoading ? "Uploading..." : "Upload"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AttachmentDialog;

AttachmentDialog.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  attachments: PropTypes.array,
  todoId: PropTypes.string,
};
