import React, { useEffect, useState } from 'react';
import { fetchPosts, fetchTags } from '../services/postService';
import PostCard from '../components/PostCard';
import TagFilter from '../components/TagFilter';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts(selectedTag);
      setPosts(data);
    };
    getPosts();
  }, [selectedTag]);

  useEffect(() => {
    const getTags = async () => {
      const data = await fetchTags();
      setTags(data);
    };
    getTags();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <TagFilter tags={tags} setSelectedTag={setSelectedTag} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
