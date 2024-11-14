import React, { useEffect, useState } from 'react';
import { fetchPosts, fetchTags } from '../services/postService';
import PostCard from '../components/PostCard';
import TagFilter from '../components/TagFilter';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const data = await fetchPosts(selectedTag);
      const filteredPosts = data.filter((post) => post.image && post.image.trim() !== '');
      setPosts(filteredPosts);
      setLoading(false);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {loading ? (
          Array.from({ length: 10 }).map((_, idx) => (
            <div key={idx} className="bg-gray-200 animate-pulse h-64 rounded"></div>
          ))
        ) : posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center text-center p-8 bg-gray-100 rounded shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21H3m6-6h6M21 3l-6 6m6-6V3m0 6h6" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-700">No hay posts para mostrar</h2>
            <p className="text-gray-500 mt-2">Intenta seleccionar otro tag</p>
          </div>
        )}
      </div>
      <TagFilter tags={tags} setSelectedTag={setSelectedTag} />
    </div>
  );
};

export default HomePage;
