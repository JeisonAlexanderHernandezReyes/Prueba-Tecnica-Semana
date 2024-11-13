import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById, fetchCommentsByPostId } from '../services/postService';

const PostDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const data = await fetchPostById(id);
      setPost(data);
    };
    const getComments = async () => {
      const data = await fetchCommentsByPostId(id);
      setComments(data);
    };
    getPost();
    getComments();
  }, [id]);

  if (!post) return <p>Cargando...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded shadow p-4">
        <img src={post.image} alt={post.text} className="w-full h-64 object-cover rounded" />
        <h1 className="text-2xl font-bold mt-2">{post.text}</h1>
        <p className="text-gray-600">
          Publicado por: {post.owner.firstName} {post.owner.lastName}
        </p>
        <div className="flex flex-wrap mt-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded mr-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Comentarios</h2>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="bg-gray-100 rounded p-2 my-2">
              <p className="text-gray-800">{comment.message}</p>
              <p className="text-gray-600 text-sm">
                Por: {comment.owner.firstName} {comment.owner.lastName}
              </p>
            </div>
          ))
        ) : (
          <p>No hay comentarios.</p>
        )}
      </div>
    </div>
  );
};

export default PostDetailPage;
