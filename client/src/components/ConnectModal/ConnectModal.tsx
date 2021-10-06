import { useState } from 'react';
import { Modal, Button, message } from 'antd';
import axios from 'axios';
import ConnectForm from '../ConnectForm/ConnectForm';

const ConnectModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = async () => {
    const input = document.getElementById('connect') as HTMLInputElement;
    const id = input.value;

    try {
      await axios.get(`/rooms/${id}/validate`);
      setIsModalVisible(true);
    } catch (err) {
      message.error(`Room with ID "${id}" not found`, 5);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Connect
      </Button>
      <Modal
        title='Connect to lobby'
        visible={isModalVisible}
        onCancel={handleCancel}
        destroyOnClose
        footer={null}
        style={{ overflowX: 'hidden' }}>
        <ConnectForm />
      </Modal>
    </>
  );
};

export default ConnectModal;
