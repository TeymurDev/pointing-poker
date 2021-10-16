import { useState } from 'react';
import { Modal, Button } from 'antd';
import ConnectFormMaster from '../ConnectFormMaster/ConnecFormMaster';

const ConnectModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
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
        onCancel={handleCancel}
        destroyOnClose
        footer={null}
        style={{ overflowX: 'hidden' }}>
        <ConnectFormMaster />
      </Modal>
    </>
  );
};

export default ConnectModal;
