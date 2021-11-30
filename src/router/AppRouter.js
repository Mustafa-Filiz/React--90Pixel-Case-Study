import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import UserDetail from '../pages/UserDetail';
import Users from '../pages/Users';
import PrivateRouter from './PrivateRouter';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route
                    path="users"
                    element={
                        <PrivateRouter>
                            <Users />
                        </PrivateRouter>
                    }
                />
                <Route path="users/:id" element={<UserDetail />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
