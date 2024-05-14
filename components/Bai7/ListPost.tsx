import React, { useState } from 'react';
import Post, { PostProps } from './Post';

const ListPost: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', author: 'John Doe' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', author: 'Jane Smith' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.', author: 'Bob Johnson' },
  ]);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default ListPost;