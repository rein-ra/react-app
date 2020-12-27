import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const HorizontalLoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = values => {
    console.log('Finish:', values);
  };

  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Palun sisesta oma kasutajanimi!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Kasutajanimi" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Palun sisesta oma parool!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Parool"
        />
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Logi sisse
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

//ReactDOM.render(<HorizontalLoginForm />, mountNode);
export default HorizontalLoginForm