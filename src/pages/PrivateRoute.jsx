import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const isAthenticated = false;
  return isAthenticated ? children : <Navigate replace to='/account/login/' />;
};

export default PublicRoute;
