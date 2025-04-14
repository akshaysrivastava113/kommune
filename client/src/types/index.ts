export type PostType = 'BLOG' | 'THREAD' | 'NOTE';

export interface Post {
  id: string;
  title?: string;
  body: string;
  type: PostType;
  author: {
    id: string;
    username: string;
  };
  tags: string[];
  createdAt: string;
  updatedAt?: string;
}