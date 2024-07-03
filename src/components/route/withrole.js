
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { db } from '../../config/firebase.js';
import { doc, getDoc } from 'firebase/firestore';

const withRole = (Component, requiredRole) => {
  return (props) => {
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
      const fetchUserRole = async () => {
        if (user) {
          try {
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
              const userData = userDoc.data();
              if (userData && userData.role) {
                setRole(userData.role);
              } else {
                setRole('guest'); // Assign a default role if not found
              }
            } else {
              setRole('guest'); // Assign a default role if document does not exist
            }
          } catch (error) {
            console.error("Error fetching user role:", error);
            setRole('guest');
          } finally {
            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      };
      fetchUserRole();
    }, [user]);

    if (!user) {
      return <Navigate to="/login" />;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (role !== requiredRole) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };
};

export default withRole;
