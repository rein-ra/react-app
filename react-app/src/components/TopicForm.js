import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import TestTable, { number } from './TestTable';

const TopicForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = values => {
    console.log('Salvestatud: ', values);
    
  };

  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="topic"
        rules={[{ required: true, message: 'Palun sisestage pealkiri!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Pealkiri" />
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
            Salvesta
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};


export default TopicForm