import apiClient from './apiClient';

export const fetchUsers = async () => {
  const response = await apiClient.get('/user');
  return response.data.data;
};
