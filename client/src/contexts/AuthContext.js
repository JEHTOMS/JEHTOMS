import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { demoUser } from '../data/sampleData';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Configure axios defaults
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Demo mode check
const isDemoMode = process.env.REACT_APP_DEMO_MODE === 'true' || window.location.hostname.includes('netlify') || window.location.hostname.includes('vercel');

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Set axios authorization header
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  // Check if user is authenticated on mount
  useEffect(() => {
    const checkAuth = async () => {
      if (isDemoMode) {
        // In demo mode, auto-login with demo user
        const savedUser = localStorage.getItem('demoUser');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
        setLoading(false);
        return;
      }

      const savedToken = localStorage.getItem('token');
      if (savedToken) {
        try {
          const response = await axios.get('/auth/me', {
            headers: { Authorization: `Bearer ${savedToken}` }
          });
          setUser(response.data.user);
          setToken(savedToken);
        } catch (error) {
          localStorage.removeItem('token');
          setToken(null);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    if (isDemoMode) {
      // Demo mode login
      const demoUsers = [
        { ...demoUser, userType: 'tenant' },
        { ...demoUser, id: 'demo-landlord', name: 'Demo Landlord', userType: 'landlord', email: 'landlord@demo.com' },
        { ...demoUser, id: 'demo-agent', name: 'Demo Agent', userType: 'agent', email: 'agent@demo.com' }
      ];
      
      const foundUser = demoUsers.find(u => u.email === email) || demoUsers[0];
      
      localStorage.setItem('demoUser', JSON.stringify(foundUser));
      setUser(foundUser);
      setToken('demo-token');
      
      return { success: true, data: { user: foundUser, token: 'demo-token' } };
    }

    try {
      const response = await axios.post('/auth/login', {
        email,
        password
      });

      const { token: newToken, user: userData } = response.data;
      
      localStorage.setItem('token', newToken);
      setToken(newToken);
      setUser(userData);
      
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed'
      };
    }
  };

  const register = async (userData) => {
    if (isDemoMode) {
      // Demo mode registration
      const newUser = {
        id: 'demo-new-user',
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        userType: userData.userType,
        isVerified: false,
        location: userData.location || {}
      };
      
      localStorage.setItem('demoUser', JSON.stringify(newUser));
      setUser(newUser);
      setToken('demo-token');
      
      return { success: true, data: { user: newUser, token: 'demo-token' } };
    }

    try {
      const response = await axios.post('/auth/register', userData);
      
      const { token: newToken, user: newUser } = response.data;
      
      localStorage.setItem('token', newToken);
      setToken(newToken);
      setUser(newUser);
      
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed',
        errors: error.response?.data?.errors
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('demoUser');
    setToken(null);
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
  };

  const updateUser = async (updates) => {
    if (isDemoMode) {
      const updatedUser = { ...user, ...updates };
      localStorage.setItem('demoUser', JSON.stringify(updatedUser));
      setUser(updatedUser);
      return { success: true, data: { user: updatedUser } };
    }

    try {
      const response = await axios.put('/users/profile', updates);
      setUser(response.data.user);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Update failed'
      };
    }
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated: !!user,
    isLandlord: user?.userType === 'landlord',
    isAgent: user?.userType === 'agent',
    isTenant: user?.userType === 'tenant',
    canListProperties: user?.userType === 'landlord' || user?.userType === 'agent',
    canCreateRequests: user?.userType === 'tenant',
    isDemoMode
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};