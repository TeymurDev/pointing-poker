import { useState } from 'react';
import { Modal, Button } from 'antd';
import ConnectForm from '../ConnectForm/ConnecForm';

const ConnectModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Start new game
      </Button>
      <Modal
        title='Connect to lobby'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
        style={{ overflowX: 'hidden' }}>
        <ConnectForm />
      </Modal>
    </>
  );
};

export default ConnectModal;
