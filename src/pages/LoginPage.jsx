import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        login(userInfo.data);
        navigate('/');
      } catch (err) {
        console.error('Failed to fetch user info:', err);
      }
    },
    onError: (error) => {
      console.error('Login Failed:', error);
    },
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Bienvenido
        </h1>
        <button
          onClick={handleLogin}
          className="flex items-center justify-center bg-red-500 text-white py-3 px-4 rounded-md hover:bg-red-600 w-full font-semibold transition duration-200"
        >
          Acceder con Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
