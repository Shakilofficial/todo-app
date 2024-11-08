import PropTypes from "prop-types";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";

const AttachmentDialog = ({ isOpen, onClose, attachments }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogTitle>Attachments</DialogTitle>
        <DialogDescription>
          Here are the attachments for this task. Click to view larger.
        </DialogDescription>
        <div className="flex flex-wrap gap-4 mt-4">
          {attachments?.map((attachment, index) => (
            <img
              key={index}
              src={attachment}
              alt={`Attachment ${index + 1}`}
              className="w-24 h-24 rounded-md object-cover"
            />
          ))}
        </div>
        <Button>Upload Attachment</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AttachmentDialog;

AttachmentDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  attachments: PropTypes.arrayOf(PropTypes.string).isRequired,
};
