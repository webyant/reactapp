import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://www.webyant.com/wp-json/wp/v2/posts');
        setPosts(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', error);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={post.link}>{post.title.rendered}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
