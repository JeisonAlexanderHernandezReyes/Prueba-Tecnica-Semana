import apiClient from './apiClient';

export const fetchPosts = async (tag = '') => {
  const response = await apiClient.get('/post', {
    params: tag ? { tags: tag } : {},
  });
  return response.data.data;
};

export const fetchPostById = async (id) => {
  const response = await apiClient.get(`/post/${id}`);
  return response.data;
};

export const fetchCommentsByPostId = async (id) => {
  const response = await apiClient.get(`/post/${id}/comment`);
  return response.data.data;
};

export const fetchTags = async () => {
  const response = await apiClient.get('/tag');
  return response.data.data;
};
