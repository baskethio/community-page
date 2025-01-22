// src/components/Post.tsx
import React, { useState } from "react";
import { useStore } from "../store/useStore";
import { Button, Textarea } from "@mantine/core";
import CommentList from "./CommentList";
import { PostType } from "../types";
import "./Post.scss"; // Correct import for Post.scss

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { addComment } = useStore();
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (commentText.trim()) {
      addComment(post.id, commentText);
      setCommentText("");
    }
  };

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      {/* Add Comment Section */}
      <div className="comment-section">
        <Textarea
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <Button onClick={handleAddComment} style={{ marginTop: "10px" }}>
          Add Comment
        </Button>
      </div>

      {/* Render Comments */}
      <CommentList comments={post.comments} postId={post.id} />
    </div>
  );
};

export default Post;
