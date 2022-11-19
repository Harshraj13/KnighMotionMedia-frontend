import { Button, Form, Input, message } from 'antd'
import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate();


  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:5000/api/users/register', values)
      navigate('/')

    } catch (error) {
      console.log(error);
      message.error("something went wrong...")
    }
  }
  return (
    <div className="auth">
      <div className="form-control mx-5">
        <h1 className='mt-5'>Registration Page!</h1>

        <Form layout='vertical' onFinish={onFinish}>

          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input type='email' />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type='password' />
          </Form.Item>
          <div className="d-flex">
            <Link to="/login">
              Login, Click here
            </Link>

            <Button className='mx-3' type="primary" htmlType="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register