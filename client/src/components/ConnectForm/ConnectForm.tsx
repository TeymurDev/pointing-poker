import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Switch, Upload } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import { socket } from '../../api/index';
import './ConnectForm.css';

type memberData = {
  gameRole: boolean;
  firstName: string;
  lastName: string | undefined;
  position: string | undefined;
  image: string | undefined;
};

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
const formFile = (event: any) => {
  if (Array.isArray(event)) {
    return event;
  }
  const newFileList = event.fileList.slice(-1);
  return event && newFileList;
};

const ConnectForm = ({ getId }: any) => {
  const history = useHistory();

  const [avatarVisibilty, setAvatarVisibility] = useState(true);
  const classNameAvatar = avatarVisibilty ? 'visible' : 'notVisible';

  // hide avatar
  const handleClick = () => {
    setAvatarVisibility(false);
  };

  // form submission
  const onFinish = (userData: memberData) => {
    socket.emit('joinRoom', { ...userData, roomId: getId() });
    socket.on('joinRoomResponse', function (roomId) {
      history.push(`/memberlobby/${roomId}`);
    });
  };

  return (
    <Form
      {...layout}
      name='nest-messages'
      onFinish={onFinish}
      validateMessages={validateMessages}
      preserve={false}>
      <Form.Item
        name={['gameRole']}
        label='Connect as'
        valuePropName='checked'
        initialValue>
        <Switch
          checkedChildren='member'
          unCheckedChildren='observer'
          defaultChecked
        />
      </Form.Item>
      <Form.Item
        name={['firstName']}
        label='Your first name'
        rules={[
          {
            required: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item name={['lastName']} label='Your last name'>
        <Input />
      </Form.Item>
      <Form.Item name={['position']} label='Your job position'>
        <Input />
      </Form.Item>
      <Form.Item
        name='image'
        label='Image'
        valuePropName='fileList'
        getValueFromEvent={formFile}>
        <Upload name='logo' listType='picture'>
          <Button onClick={handleClick}>Choose file</Button>
          <Avatar
            className={`avatar ${classNameAvatar}`}
            size={50}
            icon={<UserOutlined />}
          />
        </Upload>
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
