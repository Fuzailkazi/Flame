import React, { useEffect } from 'react';
import { useAuthStore } from '../hooks/useAuthHook';
import Sidebar from '../components/Sidebar';
import { Header } from '../components/Header';
import { useMatchHook } from '../hooks/useMatchHook';
const HomePage = () => {
  const { isLoadingUserProfiles, getUserProfiles, userProfiles } =
    useMatchHook();

  useEffect(() => {
    getUserProfiles();
  }, [getUserProfiles]);

  console.log(userProfiles);

  const { logout } = useAuthStore();
  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-pink-200 to-purple-200 overflow-hidden'>
      <Sidebar />
    </div>
  );
};

export default HomePage;
