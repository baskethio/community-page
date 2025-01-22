// src/types.ts
export interface ReplyType {
    id: number;
    text: string;
  }
  
  export interface CommentType {
    id: number;
    text: string;
    replies: ReplyType[];
  }
  
  export interface PostType {
    id: number;
    title: string;
    content: string;
    comments: CommentType[];
  }
  