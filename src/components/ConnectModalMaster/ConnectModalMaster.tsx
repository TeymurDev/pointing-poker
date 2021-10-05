import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'antd';
import ConnectFormMaster from '../ConnectFormMaster/ConnecFormMaster';

const ConnectModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const history = useHistory();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    history.push('/scrammasterlobby');
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
        <ConnectFormMaster />
      </Modal>
    </>
  );
};

export default ConnectModal;
