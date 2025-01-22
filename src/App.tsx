// src/App.tsx
import React, { useState } from "react";
import { useStore } from "./store/useStore";
import Post from "./components/Post.tsx";
import "./styles/App.scss";
import { Button } from "@mantine/core";

const App: React.FC = () => {
  const { posts, addPost } = useStore(); // Accessing the global store

  // Handle adding a new post
  const handleAddPost = (title: string, content: string) => {
    addPost(title, content);
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>Community Posts</h1>

      {/* Add Post Form */}
      <div>
        <h2>Create a New Post</h2>
        <AddPostForm onAddPost={handleAddPost} />
      </div>

      {/* Render all posts */}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

// Component for adding a new post
interface AddPostFormProps {
  onAddPost: (title: string, content: string) => void;
}

const AddPostForm: React.FC<AddPostFormProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPost(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Add Post</Button>
    </form>
  );
};

export default App;
