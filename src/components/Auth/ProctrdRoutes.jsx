import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'; // Assuming you are using React Router

const ProtectedRoute = ({ children, user, redirect = "/login" }) => {
    if (!user) return <Navigate to={redirect} />;
    console.log(<Outlet/>)
    return children ? children: <Outlet/>; // Render children if user is authenticated
}

export default ProtectedRoute;
