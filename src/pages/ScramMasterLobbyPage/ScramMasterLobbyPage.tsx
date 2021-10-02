import { useEffect } from 'react';
import { Space, Button, Typography, List, notification } from 'antd';
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
  sessionName: string;
  scramMasterInfo: ScramMasterCardInfo;
  lobbyLink: string;
  membersInfo: Array<MemberCardInfo>;
  issuesInfo: Array<LobbyScramMasterIssueCardInfo>;
  settingsInfo: SettingsValues;
};

const ScramMasterLobbyPage = ({
  sessionName,
  scramMasterInfo,
  lobbyLink,
  membersInfo,
  issuesInfo,
  settingsInfo,
}: ScramMasterLobbyPageProp) => {
  useEffect(() => {
    notification.info({
      message: 'Welcome to lobby!',
    });
  });
  return (
    <Space direction='vertical' align='center' className={styles.container}>
      <Text className={styles.sessionTitleText}>{sessionName}</Text>

      <Space
        direction='vertical'
        align='start'
        className={styles.scramMasterContainer}>
        <Text className={styles.labelText}>Scram master</Text>
        <ScramMasterCard
          id={scramMasterInfo.id}
          firstName={scramMasterInfo.firstName}
          lastName={scramMasterInfo.lastName}
          position={scramMasterInfo.position}
          image={scramMasterInfo.image}
        />
      </Space>

      <Space
        direction='vertical'
        align='start'
        className={styles.scramMasterContainer}>
        <Text className={styles.labelText}>Link to lobby</Text>
        <LinkToLobby link={lobbyLink} />
      </Space>

      <Space className={styles.buttonContainer}>
        <Button type='primary' className={styles.button}>
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
        dataSource={membersInfo}
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
