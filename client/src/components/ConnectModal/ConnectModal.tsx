import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'antd';
import ConnectForm from '../ConnectForm/ConnectForm';

const ConnectModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const history = useHistory();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    history.push('/teammemberlobby');
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
