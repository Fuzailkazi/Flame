import React from 'react';
import { useAuthStore } from '../hooks/useAuthHook';

const HomePage = () => {
  const { logout } = useAuthStore();
  return (
    <div>
      <h1>hello </h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomePage;
