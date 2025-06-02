import React from 'react';
import { useAuthStore } from '../hooks/useAuthHook';
import Sidebar from '../components/Sidebar';
import { Header } from '../components/Header';
const HomePage = () => {
  const { logout } = useAuthStore();
  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-pink-200 to-purple-200 overflow-hidden'>
      <Sidebar></Sidebar>
    </div>
  );
};

export default HomePage;
