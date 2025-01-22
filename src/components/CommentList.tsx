// src/components/CommentList.tsx
import React from "react";
import { List } from "@mantine/core";
import Comment from "./Comment";
import { CommentType } from "../types";

interface CommentListProps {
  comments: CommentType[];
  postId: number;
}

const CommentList: React.FC<CommentListProps> = ({ comments, postId }) => {
  return (
    <List style={{ paddingLeft: "20px" }}>
      {comments.map((comment) => (
        <List.Item key={comment.id}>
          <Comment comment={comment} postId={postId} />
        </List.Item>
      ))}
    </List>
  );
};

export default CommentList;
