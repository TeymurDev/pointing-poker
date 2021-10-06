import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Space, Button, Typography, List, notification } from 'antd';
import axios from 'axios';
import styles from './ScramMasterLobbyPage.module.css';

import ScramMasterCard, {
  ScramMasterCardInfo,
} from '../../components/ScramMasterCard/scram-master-card';
import MemberCard, {
  MemberCardInfo,
} from '../../components/MemberCard/member-card';
import LobbyScramMasterIssueCard, {
  LobbyScramMasterIssueCardInfo,
} from '../../components/LobbyScramMasterIssueCard/lobby-scram-master-issue-card';
import LobbyScramMasterSettings, {
  SettingsValues,
} from '../../components/LobbyScramMasterSettings/lobby-scram-master-settings';
import CreateNewIssueCard from '../../components/CreateNewIssueCard/create-new-issue-card';
import LinkToLobby from '../../components/LinkToLobby/link-to-lobby';

const { Text } = Typography;

type ScramMasterLobbyPageProp = {
  issuesInfo: Array<LobbyScramMasterIssueCardInfo>;
  settingsInfo: SettingsValues;
};

type UsersInfo = {
  master: ScramMasterCardInfo;
  users: Array<MemberCardInfo>;
};

const ScramMasterLobbyPage = ({
  issuesInfo,
  settingsInfo,
}: ScramMasterLobbyPageProp) => {
  const [users, setUsers] = useState<UsersInfo>();

  const history = useHistory();
  const { roomId } = useParams<{ roomId: string }>();

  const handleClick = () => {
    history.push(`/mastergame/${roomId}`);
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
        <Text className={styles.labelText}>Scram master</Text>
        <ScramMasterCard
          id={users.master.id}
          firstName={users.master.firstName}
          lastName={users.master.lastName}
          position={users.master.position}
          image={users.master.image}
        />
      </Space>

      <Space
        direction='vertical'
        align='start'
        className={styles.scramMasterContainer}>
        <Text className={styles.labelText}>Link to lobby</Text>
        <LinkToLobby link={roomId} />
      </Space>

      <Space className={styles.buttonContainer}>
        <Button onClick={handleClick} type='primary' className={styles.button}>
          Start game
        </Button>
        <Button type='primary' ghost className={styles.button}>
          Cancel game
        </Button>
      </Space>

      <Text className={styles.titleText}>Issues</Text>
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
        dataSource={issuesInfo}
        renderItem={(item) => (
          <List.Item key={item.name} className={styles.listItem}>
            <LobbyScramMasterIssueCard
              name={item.name}
              priority={item.priority}
            />
          </List.Item>
        )}>
        <List.Item className={styles.listItem}>
          <CreateNewIssueCard />
        </List.Item>
      </List>

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
          <List.Item key={item.id} className={styles.listItem}>
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

      <LobbyScramMasterSettings
        scramMasterParticipation={settingsInfo.scramMasterParticipation}
        newMemberAdmission={settingsInfo.newMemberAdmission}
        autoCardsFlip={settingsInfo.autoCardsFlip}
        changeVoteAfterReveal={settingsInfo.changeVoteAfterReveal}
        timerPresence={settingsInfo.timerPresence}
      />
    </Space>
  );
};

export default ScramMasterLobbyPage;
