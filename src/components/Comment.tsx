// src/components/Comment.tsx
import React, { useState } from "react";
import { Text, List, Textarea, Button } from "@mantine/core";
import { useStore } from "../store/useStore";
import { CommentType } from "../types";

interface CommentProps {
  comment: CommentType;
  postId: number;
}

const Comment: React.FC<CommentProps> = ({ comment, postId }) => {
  const { addReply } = useStore(); // Accessing the global store
  const [replyText, setReplyText] = useState("");

  const handleAddReply = () => {
    if (replyText.trim()) {
      addReply(postId, comment.id, replyText);
      setReplyText("");
    }
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <Text size="500">{comment.text}</Text>

      {/* Reply Input */}
      <div style={{ marginTop: "10px" }}>
        <Textarea
          placeholder="Add a reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <Button onClick={handleAddReply} style={{ marginTop: "10px" }}>
          Reply
        </Button>
      </div>

      {/* Nested Replies */}
      {comment.replies.length > 0 && (
        <List style={{ paddingLeft: "20px" }}>
          {comment.replies.map((reply) => (
            <List.Item key={reply.id}>
              <Text>{reply.text}</Text>
            </List.Item>
          ))}
        </List>
      )}
    </div>
  );
};

export default Comment;
