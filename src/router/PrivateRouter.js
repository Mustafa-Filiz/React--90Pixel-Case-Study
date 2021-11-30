import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import { currentUserSelector } from '../redux/userSlice';

function PrivateRouter({children}) {
    const currentUser = useSelector(currentUserSelector);

    return currentUser ? children : <Navigate to="/login" />;
}

export default PrivateRouter;
