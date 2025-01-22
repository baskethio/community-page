// src/store/useStore.ts

import { create } from 'zustand';
import { PostType, CommentType, ReplyType } from '../types';

interface PostStore {
  posts: PostType[];
  addPost: (title: string, content: string) => void;
  addComment: (postId: number, text: string) => void;
  addReply: (postId: number, commentId: number, text: string) => void;
}

export const useStore = create<PostStore>((set) => ({
  posts: [],

  // Function to add a new post
  addPost: (title, content) =>
    set((state) => ({
      posts: [
        ...state.posts,
        { id: Date.now(), title, content, comments: [] },
      ],
    })),

  // Function to add a comment to a specific post
  addComment: (postId, text) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { id: Date.now(), text, replies: [] },
              ],
            }
          : post
      ),
    })),

  // Function to add a reply to a specific comment
  addReply: (postId, commentId, text) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      replies: [
                        ...comment.replies,
                        { id: Date.now(), text },
                      ],
                    }
                  : comment
              ),
            }
          : post
      ),
    })),
}));
