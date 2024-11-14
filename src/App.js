import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import NavBar from './components/NavBar';
import { AuthProvider } from './contexts/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <Router basename="/Prueba-Tecnica-Semana">
          <NavBar />
          <AppRouter />
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
