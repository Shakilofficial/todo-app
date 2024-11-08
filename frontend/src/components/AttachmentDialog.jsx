import PropTypes from "prop-types";
import { useCallback, useState } from "react";

import { useUpdateTodoMutation } from "@/features/api/apiSlice";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";

const AttachmentDialog = ({ isOpen, onClose, attachments, todoId }) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [attachmentList, setAttachmentList] = useState(attachments || []);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = useCallback(async (e) => {
    const files = Array.from(e.target.files);
    const fileDataPromises = files.map((file) => convertFileToBase64(file));
    const fileDataArray = await Promise.all(fileDataPromises);
    setSelectedFiles(fileDataArray);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsUploading(true);

      try {
        const result = await updateTodo({
          id: todoId,
          data: { attachments: selectedFiles },
        }).unwrap();

        setAttachmentList(result.attachments);
        setSelectedFiles([]);
        onClose();
      } catch (error) {
        console.error("Failed to upload attachments:", error);
      } finally {
        setIsUploading(false);
      }
    },
    [selectedFiles, updateTodo, todoId, onClose]
  );

  // Convert file to Base64
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogTitle>Attachments</DialogTitle>
        <DialogDescription>
          Here are the attachments for this task. Click to view larger.
        </DialogDescription>
        <div className="flex flex-wrap gap-4 mt-4">
          {attachmentList.map((attachment, index) => (
            <img
              key={index}
              src={attachment}
              alt={`Attachment ${index + 1}`}
              className="w-24 h-24 rounded-md object-cover"
            />
          ))}
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
          <Button type="submit" className="mt-4" disabled={isUploading}>
            {isUploading ? "Uploading..." : "Upload"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AttachmentDialog;

AttachmentDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  attachments: PropTypes.arrayOf(PropTypes.string).isRequired,
  todoId: PropTypes.string.isRequired, // Required to identify which todo to update
};
