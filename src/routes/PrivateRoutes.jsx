import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import Loader from '../Components/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoutes({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>

}
