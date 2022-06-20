import './App.css';
// import Mailer from './component/Mail';
import React from "react"; 
import { Form, Input, Button, Space} from 'antd';


const { TextArea } = Input;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('');

function App() {

  const [form] = Form.useForm();
  const onComplete = (fields) => {
    const message = {
      to:'kamokamophilippe13@gmail.com',
      from: fields.email,
      subject: fields.subject,
      html: `
      <p><strong>Name:</strong> ${fields.name}</p>
      <p>${fields.message}</p>`
    }

    sgMail
    .send(message)
    .then(() => {
      form.resetFields();
      console.log('Email sent!');
    })
    .catch((err) => {
console.log('error', err);
    })
  }

  return (
    <div className="App">
     {/* <Mailer /> */}
     <Form layout='vertical' form={form} onFinish={onComplete}>
    <Form.Item
    name='name'
    label='Name'
    rules={[
      {
        required: true,
      },
    ]}>
    <Input />
    </Form.Item>
    <Form.Item
    name='email'
    label='Email'
    rules={[
      {
        required: true
      },
    ]}>
      <Input />
    </Form.Item>
    <Form.Item
    name='subject'
    label='subject'
    rules={[
      {
        required: true,
      },
    ]}>
    <Input />
    </Form.Item>
    <Form.Item
    name='message'
    label='message'
    rules={[
      {
        required: true,
      },
    ]}>
    <TextArea />
    </Form.Item>
     <Form.Item>
      <Space>
        <Button type='primary' htmlType='submit'>submit</Button>
        <Button type='secondary' htmlType='submit' onClick={(e) => form.resetFields()}>Clear</Button>
      </Space>
      </Form.Item>
      </Form>
     


    
    </div>
  );
}

export default App;
