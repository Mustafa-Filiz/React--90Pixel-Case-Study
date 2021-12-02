import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAsync, userLogin, usersSelector } from '../redux/userSlice';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);

    useEffect(() => {
        dispatch(fetchUsersAsync());
    }, [dispatch]);

    const onFinish = (values) => {
        const { email, password } = values;
        const user = users.find((user) => email === user.email.toLowerCase());
        // console.log(user)
        if (user.id) {
            if (
                user.email.toLowerCase() === email &&
                user.password === password
            ) {
                dispatch(userLogin(user));
                navigate('users');
            } else {
                alert('Wrong email or password.');
            }
        } else {
            alert("User couldn't find.");
        }
    };

    console.log(users);

    return (
        <div>
            <h1>Welcome to my app.</h1>
            <h3>Please login or sign up to see user info.</h3>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                size="large"
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <MailOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>{' '}
                    or <Link to="signup">Register Now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
