import { Button, Form, Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import './style.css';

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

export default () => {
  // finish
  const onFinish = (values: LoginForm) => {
    console.log('Success:', values);
  };

  // error
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login-page'>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
};
