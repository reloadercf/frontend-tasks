import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export const ProtectedRoute = () => {
  const { auth } = useAuth();
  // console.log(auth);

  return <>{auth._id ? <Outlet /> : <Navigate to="/" />}</>;
};
