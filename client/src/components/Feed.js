import React, { useEffect, useState } from 'react';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Dummy feed for now
    setPosts([
      {
        id: 1,
        user: { name: "Alice", handle: "@alice" },
        content: "Hello from Alice!",
      },
      {
        id: 2,
        user: { name: "Bob", handle: "@bob" },
        content: "Excited to join Z!",
      },
    ]);
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {posts.map(post => (
        <div key={post.id}>
          <strong>{post.user.name}</strong> {post.user.handle}
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
