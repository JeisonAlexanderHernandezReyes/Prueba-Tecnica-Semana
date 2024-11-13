import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <div className="bg-white rounded shadow p-4" onClick={handleClick}>
      <img src={post.image} alt={post.text} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{post.text}</h2>
      <p className="text-gray-600">Publicado por: {post.owner.firstName} {post.owner.lastName}</p>
      <div className="flex flex-wrap mt-2">
        {post.tags.map((tag) => (
          <span key={tag} className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
