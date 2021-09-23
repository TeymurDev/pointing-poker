import { Space, Button, Typography, List, notification } from 'antd';
import styles from './MemberLobbyPage.module.css';

import ScramMasterCard, {
  ScramMasterCardInfo,
} from '../../components/ScramMasterCard/scram-master-card';
import MemberCard, {
  MemberCardInfo,
} from '../../components/MemberCard/member-card';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const { Text } = Typography;

const lobbyNotification = notification.info({
  message: 'Welcome to lobby!',
});

type MemberLobbyPageProp = {
  sessionName: string;
  scramMasterInfo: ScramMasterCardInfo;
  membersInfo: Array<MemberCardInfo>;
};

const MemberLobbyPage = ({
  sessionName,
  scramMasterInfo,
  membersInfo,
}: MemberLobbyPageProp) => {
  return (
    <div>
      {lobbyNotification}
      <Header />
      <Space direction='vertical' align='center' className={styles.container}>
        <Text className={styles.sessionTitleText}>{sessionName}</Text>

        <Space
          direction='vertical'
          align='start'
          className={styles.scramMasterContainer}>
          <Text className={styles.scramMasterText}>Scram master</Text>
          <ScramMasterCard
            id={scramMasterInfo.id}
            firstName={scramMasterInfo.firstName}
            lastName={scramMasterInfo.lastName}
            position={scramMasterInfo.position}
            image={scramMasterInfo.image}
          />
        </Space>

        <Space className={styles.exitButtonContainer}>
          <Button type='primary' ghost className={styles.exitButton}>
            Exit
          </Button>
        </Space>

        <Text className={styles.titleText}>Members</Text>
        <List
          className={styles.list}
          grid={{
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={membersInfo}
          renderItem={(item) => (
            <List.Item className={styles.listItem}>
              <MemberCard
                id={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                position={item.position}
                image={item.image}
              />
            </List.Item>
          )}
        />
      </Space>
      <Footer />
    </div>
  );
};

export default MemberLobbyPage;
