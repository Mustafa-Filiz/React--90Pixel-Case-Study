import React from 'react';
import { List, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
    currentUserSelector,
    userLogout,
    usersSelector,
} from '../redux/userSlice';
import axios from 'axios';

function Users() {
    const users = useSelector(usersSelector);
    const currentUser = useSelector(currentUserSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const displayedUsers = users.filter((user) => user.id !== currentUser.id);

    const handleLogout = () => {
        dispatch(userLogout());
        navigate('/');
    };

    const handleDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_USERS_API_URL}/${id}`)
    }

    console.log(users)

    return (
        <div>
            <div className="logout-button">
                <h3 style={{ marginRight: 20 }}>Welcome {currentUser.name}</h3>
                <Button type="primary" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <h1>User List</h1>
            <List
                className="user-list"
                itemLayout="horizontal"
                dataSource={displayedUsers}
                renderItem={(user) => (
                    <List.Item
                        actions={[
                            <Link to={`${user.id}`}>more</Link>,
                            <Button type="text" danger onClick={() => handleDelete(user.id)}>
                                delete
                            </Button>
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={user.image} size="large" />}
                            title={user.name}
                            description={user.country}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Users;
