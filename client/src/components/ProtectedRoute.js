import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ 
  children, 
  requirePropertyListing = false, 
  requireTenant = false 
}) => {
  const { isAuthenticated, canListProperties, canCreateRequests } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login page with return url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requirePropertyListing && !canListProperties) {
    // Redirect to home if user cannot list properties
    return <Navigate to="/" replace />;
  }

  if (requireTenant && !canCreateRequests) {
    // Redirect to home if user is not a tenant
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;