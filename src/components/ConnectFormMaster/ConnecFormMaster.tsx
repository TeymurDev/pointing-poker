import { FC, useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import './ConnectFormMaster.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
// validation message
const validateMessages = {
  required: 'Enter your name',
};
// download user avatar
const normFile = (e: any) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }
  e.fileList = e.fileList.slice(-1);

  message.success('File successfully uploaded');

  return e && e.fileList;
};

const ConnectForm: FC = () => {
  const [avatarVisibilty, setAvatarVisibility] = useState(true);
  const classNameAvatar = avatarVisibilty
    ? 'avatarvisible'
    : 'avatarnotvisible';
  // hide avatar
  const handleClick = () => {
    setAvatarVisibility(false);
  };
  // form submission
  const onFinish = (values: any) => {
    console.log(values);
    message.success('you are successfully connected');
  };

  return (
    <Form
      {...layout}
      name='nest-messages'
      onFinish={onFinish}
      validateMessages={validateMessages}
      preserve={false}>
      {/* <Form.Item label='Connect as Observer' valuePropName='checked'>
        <Switch />
      </Form.Item> */}
      <Form.Item
        name={['user', 'name']}
        label='Your first name'
        rules={[
          {
            required: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'lastname']} label='Your last name'>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'position']} label='Your job position'>
        <Input />
      </Form.Item>
      <Form.Item
        name='upload'
        label='Image'
        valuePropName='fileList'
        getValueFromEvent={normFile}>
        <Upload name='logo' action='/upload.do' listType='picture'>
          <Button onClick={handleClick}>Choose file</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <div className='avatar'>
          <Avatar
            className={classNameAvatar}
            size={50}
            icon={<UserOutlined />}
          />
        </div>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type='primary' htmlType='submit'>
          Confirm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ConnectForm;
