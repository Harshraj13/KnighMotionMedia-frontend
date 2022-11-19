import '../resources/auth.css'
import { Button, Form, Input, message } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



function Login() {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {

            // const response = await axios.post("https://m3-backend-api.onrender.com/api/users/login", values)
            const response = await axios.post("http://localhost:5000/api/users/login", values)


            localStorage.setItem(
                "user",
                JSON.stringify({ ...response.data, password: "" })
            );

            message.success('Login successful')
            navigate('/')

        } catch (error) {
            console.log(error)
            message.error("Login failed")
        }
    }
    const onFinishFailed = (values) => {
        message.error("Opps something went wrong...")
    }
    return (
        <div className='auth'>
            <div className='form-control mx-5'>
            <h1 className='mt-5'>Login Page!</h1>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Link to="/register">
                            To Register, Click here
                        </Link>
                        <Button className="mx-3" type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login