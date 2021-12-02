import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { usersSelector } from '../redux/userSlice';
import { Card } from 'antd';

const { Meta } = Card;

function UserDetail() {
    const { id } = useParams();
    const users = useSelector(usersSelector);

    const detailedUser = users.find((user) => user.id === id);
    console.log(detailedUser);

    return (
        <Card
            style={{ width: 500, margin: 'auto' }}
            cover={<img alt="profile-pic" src={detailedUser.image} />}
        >
            <Meta
                title={detailedUser.name}
                description={
                    <div>
                        <p>{detailedUser.email.toLowerCase()}</p>
                        <p>Country: {detailedUser.country}</p>
                        <p>Company: {detailedUser.company}</p>
                        <p>Job: {detailedUser.job}</p>
                    </div>
                }
            />
        </Card>
    );
}

export default UserDetail;
