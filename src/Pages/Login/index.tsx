import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import qs from 'qs';
import { LockOutlined } from '@ant-design/icons';
import './style.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Component } from 'react';

interface LoginForm {
  password: string;
}

interface ErrorField {
  errors: string[];
  name: string[];
  warings: string[];
}

interface ErrorFields {
  [propName: number]: ErrorField[];
}

interface ErrorInfo {
  errorFields: ErrorFields;
  values: ErrorFields;
}

class LoginState {
  isLogin = false;
}

class LoginPage extends Component {
  state = {
    isLogin: false,
  };

  componentDidMount() {
    axios.get('/api/isLogin').then((res) => {
      if (!res.data?.data) {
        this.setState({ isLogin: false });
      } else {
        this.setState({ isLogin: true });
      }
    });
  }

  // finish
  onFinish = (values: LoginForm) => {
    axios
      .post(
        '/api/login',
        qs.stringify({
          password: values.password,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((res) => {
        if (
          res.data?.data ||
          res.data?.errMsg === 'you have already logged in'
        ) {
          this.setState({ isLogin: true });
        } else {
          message.error('login fail');
        }
      });
  };

  // error
  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  //console.log('isLogin:2:' + loginState.isLogin);
  render() {
    const { isLogin } = this.state;
    return isLogin ? (
      <Routes>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    ) : (
      <div className='login-page'>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className='site-form-item-icon' />}
              placeholder='password'
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              login
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default LoginPage;
