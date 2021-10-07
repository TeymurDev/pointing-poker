import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Space, Button, Typography, List, notification } from 'antd';
import axios from 'axios';
import styles from './MemberLobbyPage.module.css';

import ScramMasterCard, {
  ScramMasterCardInfo,
} from '../../components/ScramMasterCard/scram-master-card';
import MemberCard, {
  MemberCardInfo,
} from '../../components/MemberCard/member-card';

const { Text } = Typography;

type UsersInfo = {
  master: ScramMasterCardInfo;
  users: Array<MemberCardInfo>;
};

const MemberLobbyPage = () => {
  const [users, setUsers] = useState<UsersInfo>();

  const history = useHistory();
  const { roomId } = useParams<{ roomId: string }>();

  const handleClick = () => {
    history.push(`/membergame/${roomId}`);
  };

  const onExit = () => {
    history.push(``);
  };

  useEffect(() => {
    notification.info({
      message: 'Welcome to lobby!',
    });

    axios
      .get(`/rooms/${roomId}/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch(() => {
        // handle error
      });
  }, []);

  if (!users) return null;

  return (
    <Space direction='vertical' align='center' className={styles.container}>
      <Text className={styles.sessionTitleText}>Lobby</Text>

      <Space
        direction='vertical'
        align='start'
        className={styles.scramMasterContainer}>
        <Text className={styles.scramMasterText}>Scram master</Text>
        <ScramMasterCard
          id={users.master.id}
          firstName={users.master.firstName}
          lastName={users.master.lastName}
          position={users.master.position}
          image={users.master.image}
        />
      </Space>

      <Space className={styles.buttonContainer}>
        <Button
          type='primary'
          className={styles.exitButton}
          onClick={handleClick}>
          Game
        </Button>
        <Button
          type='primary'
          ghost
          className={styles.exitButton}
          onClick={onExit}>
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
        dataSource={users.users}
        renderItem={(item) => (
          <List.Item className={styles.listItem}>
            <MemberCard
              id={item.id}
              gameRole={item.gameRole}
              firstName={item.firstName}
              lastName={item.lastName}
              position={item.position}
              image={item.image}
            />
          </List.Item>
        )}
      />
    </Space>
  );
};

export default MemberLobbyPage;
