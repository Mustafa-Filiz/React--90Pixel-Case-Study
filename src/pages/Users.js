import React from 'react';
import { List, Avatar, Button } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Users() {
    const users = useSelector((state) => state.users.users);

    return (
        <div>
			<h1>User List</h1>
            <List
                className="user-list"
                itemLayout="horizontal"
                dataSource={users}
                renderItem={(user) => (
                    <List.Item
                        actions={[
                            <Link to={`${user.id}`}>more</Link>,
                            <Button type="text" danger>delete</Button>,
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
