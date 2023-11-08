import React from 'react';

import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Loading from '../components/Loading';

const MainWrapper = () => {
  return (
    <>
      <Header />
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export const ProtectedRoute: React.FC = () => {
  const { auth, isLoad } = useAuth();
  if (isLoad) return <Loading />;

  return <>{auth && auth._id ? <MainWrapper /> : <Navigate to="/" />}</>;
};
