import { FC } from 'react';
import { Space, Typography, Input } from 'antd';
import styles from './MainPage.module.css';
import ConnectModalMaster from '../../components/ConnectModalMaster/ConnectModalMaster';
import ConnectModal from '../../components/ConnectModal/ConnectModal';

const { Text } = Typography;

const MainPage: FC = () => {
  return (
    <Space direction='vertical' align='center' className={styles.container}>
      <img className={styles.logo} src='/planningpokerlogo.png' alt='logo' />
      <Space
        direction='vertical'
        align='start'
        size='middle'
        className={styles.mainContentContainer}>
        <Text className={styles.titleText}>Start your planning:</Text>
        <Space>
          <Text className={styles.text}>Create session:</Text>
          <ConnectModalMaster />
        </Space>
        <Space align='center' className={styles.titleTextContainer}>
          <Text className={styles.titleText}>OR:</Text>
        </Space>
        <Space direction='horizontal' className={styles.connectContainer}>
          <Space>
            <Text className={styles.text}>Connect to lobby by</Text>
            <Text className={styles.url}>URL:</Text>
          </Space>
          <Space className={styles.inputContainer}>
            <Input id='connect' type='url' required />
            {/* <Button type='primary'>Connect</Button> */}
            <ConnectModal />
          </Space>
        </Space>
      </Space>
    </Space>
  );
};

export default MainPage;
