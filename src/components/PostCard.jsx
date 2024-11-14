import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105"
      onClick={handleClick}
    >
      <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-4">
        <h3 className="text-white font-semibold">
          {post.owner.title} {post.owner.firstName} {post.owner.lastName}
        </h3>
        <p className="text-white text-sm">{new Date(post.publishDate).toLocaleString()}</p>
      </div>
      <img
        src={post.image}
        alt={post.text}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-gray-800 mb-2">{post.text}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-pink-500 text-white text-xs font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="px-4 py-2 flex items-center justify-between bg-gray-100">
        <div className="text-gray-600 flex items-center">
          <span className="text-lg mr-1">👍</span> {post.likes}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
