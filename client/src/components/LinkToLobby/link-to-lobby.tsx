import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Space, Input, Button, message } from 'antd';
import styles from './link-to-lobby.module.css';

type LinkToLobbyInfo = {
  link: string;
};

const LinkToLobby = ({ link }: LinkToLobbyInfo) => {
  const success = () => {
    message.success('Copied!');
  };

  return (
    <Space className={styles.container}>
      <Input value={link} readOnly />
      <CopyToClipboard text={link} onCopy={success}>
        <Button type='primary'>Copy</Button>
      </CopyToClipboard>
    </Space>
  );
};

export default LinkToLobby;
