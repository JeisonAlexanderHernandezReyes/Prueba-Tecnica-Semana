import apiClient from './apiClient';

export const fetchPosts = async (tag = '') => {
  const sanitizedTag = tag.trim().replace(/^#/, '');
  
  const endpoint = sanitizedTag ? `/tag/${sanitizedTag}/post` : '/post';

  const response = await apiClient.get(endpoint, {
    params: { limit: 30 },
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
