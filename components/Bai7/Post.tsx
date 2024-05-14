import React from 'react';

export interface PostProps {
  id: number;
  title: string;
  content: string;
  author: string;
}

const Post: React.FC<PostProps> = ({ id, title, content, author }) => {
  return (
    <div key={id} className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <p><strong>Author:</strong> {author}</p>
    </div>
  );
};

export default Post;