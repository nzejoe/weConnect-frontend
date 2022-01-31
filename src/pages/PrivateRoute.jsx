import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const isAthenticated = Boolean(localStorage.getItem('weConnect_user'));
  return isAthenticated ? children : <Navigate replace to='/account/login/' />;
};

export default PublicRoute;
