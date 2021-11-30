import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { usersSelector } from '../redux/userSlice';
import { Descriptions, Badge } from 'antd';

function UserDetail() {
    const { id } = useParams();
    const users = useSelector(usersSelector);

    const detailedUser = users.find((user) => user.id === id);
    console.log(detailedUser);

    return (
        <Descriptions title="User Info" bordered>
            <Descriptions.Item>
                <img src={detailedUser.image} alt="profile-pic" />
            </Descriptions.Item>
            <Descriptions.Item label="Name">
                {detailedUser.name}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
                {detailedUser.email}
            </Descriptions.Item>
            <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
            <Descriptions.Item label="Order time">
                2018-04-24 18:00:00
            </Descriptions.Item>
            <Descriptions.Item label="Usage Time" span={2}>
                2019-04-24 18:00:00
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
                <Badge status="processing" text="Running" />
            </Descriptions.Item>
            <Descriptions.Item label="Negotiated Amount">
                $80.00
            </Descriptions.Item>
            <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
            <Descriptions.Item label="Official Receipts">
                $60.00
            </Descriptions.Item>
            <Descriptions.Item label="Config Info">
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1<br />
            </Descriptions.Item>
        </Descriptions>
    );
}

export default UserDetail;
