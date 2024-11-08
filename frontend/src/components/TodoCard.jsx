import { format } from "date-fns";
import {
  Calendar,
  ClipboardList,
  Layers,
  MessageSquare,
  Paperclip,
} from "lucide-react";
import { useState } from "react";
import AttachmentDialog from "./AttachmentDialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

const TodoCard = ({ todo }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    clientName,
    assignee,
    description,
    progress,
    comments,
    members,
    attachments,
    date,
    clientAvatar,
    assigneeAvatar,
  } = todo || {};

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Card className="w-full max-w-md p-2">
      <CardContent className="p-0 space-y-3">
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src={clientAvatar} alt={clientName} />
            <AvatarFallback>{clientName?.[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{clientName}</span>
          <div className="flex items-center ml-auto gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src={assigneeAvatar} alt={assignee} />
              <AvatarFallback>{assignee?.[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">{assignee}</span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-md">
          <div className="flex items-center w-4/5 space-x-2">
            <Layers className="w-4 h-4 text-gray-600" />
            <p className="text-sm text-gray-800">{description}</p>
          </div>
          <div className="flex items-center w-1/5 justify-end space-x-2">
            <ClipboardList className="w-4 h-4 text-gray-600" />
            <p className="text-sm text-gray-800">{progress}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <Avatar className="w-6 h-6 border-2 border-background">
                <AvatarImage src={clientAvatar} alt={clientName} />
                <AvatarFallback>{clientName?.[0]}</AvatarFallback>
              </Avatar>
              <Avatar className="w-6 h-6 border-2 border-background">
                <AvatarImage src={assigneeAvatar} alt={assignee} />
                <AvatarFallback>{assignee?.[0]}</AvatarFallback>
              </Avatar>
            </div>
            <span>{members}+</span>
          </div>

          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            <span>{comments}</span>
          </div>

          <div
            onClick={handleDialogOpen}
            className="flex items-center gap-1 cursor-pointer"
          >
            <Paperclip className="w-4 h-4" />
            <span>{attachments?.length}</span>
          </div>

          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{format(new Date(date), "yyyy-MM-dd")}</span>
          </div>
        </div>
      </CardContent>
      <AttachmentDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        attachments={attachments}
      />
    </Card>
  );
};

export default TodoCard;
