import { useState } from 'react';
import { Space, Button, Typography, List, Radio } from 'antd';
import styles from './scram-master-game-page.module.css';

import ScramMasterCard, {
  ScramMasterCardInfo,
} from '../../components/ScramMasterCard/scram-master-card';
import GameScramMasterIssueCard, {
  GameScramMasterIssueCardInfo,
} from '../../components/GameScramMasterIssueCard/game-scram-master-issue-card';
import { MemberCardInfo } from '../../components/MemberCard/member-card';
import { SettingsValues } from '../../components/LobbyScramMasterSettings/lobby-scram-master-settings';
import Timer from '../../components/Timer/timer';
import ScoreCard from '../../components/ScoreCard/score-card';
import VoteCard, { VoteCardInfo } from '../../components/VoteCard/vote-card';
import MemberCardMini from '../../components/MemberCardMini/member-card-mini';
import CreateNewIssueCard from '../../components/CreateNewIssueCard/create-new-issue-card';

const { Text } = Typography;

type ScramMasterGamePageProp = {
  sessionName: string;
  scramMasterInfo: ScramMasterCardInfo;
  membersInfo: Array<MemberCardInfo>;
  issuesInfo: Array<GameScramMasterIssueCardInfo>;
  settingsInfo: SettingsValues;
  voteCardsInfo: Array<VoteCardInfo>;
};

const ScramMasterGamePage = ({
  sessionName,
  scramMasterInfo,
  membersInfo,
  issuesInfo,
  settingsInfo,
  voteCardsInfo,
}: ScramMasterGamePageProp) => {
  const [voteValue, setVoteValue] = useState(0);
  const onChange = (event: any) => {
    console.log('radio checked', event.target.value);
    setVoteValue(event.target.value);
  };

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

      {settingsInfo.timerPresence ? (
        <Timer
          initialMinutes={settingsInfo.timerMinutes}
          initialSeconds={settingsInfo.timerSeconds}
        />
      ) : null}

      <Space size='large'>
        <Button type='primary' className={styles.button}>
          Restart round
        </Button>
        <Button type='primary' className={styles.button}>
          Next issue
        </Button>
        <Button type='primary' ghost className={styles.button}>
          Stop game
        </Button>
      </Space>

      <Space className={styles.gameProcessContainer}>
        <Space className={styles.listContainer}>
          <List
            className={styles.list}
            grid={{
              xs: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 1,
              xxl: 1,
            }}
            dataSource={issuesInfo}
            renderItem={(item) => (
              <List.Item key={item.name}>
                <GameScramMasterIssueCard
                  current={item.current}
                  name={item.name}
                  priority={item.priority}
                />
              </List.Item>
            )}>
            <CreateNewIssueCard />
          </List>
        </Space>

        <Space>
          <Space
            direction='vertical'
            align='center'
            className={styles.listContainer}>
            <Text className={styles.titleText}>Score</Text>
            <List
              className={styles.list}
              grid={{
                xs: 1,
                sm: 1,
                md: 1,
                lg: 1,
                xl: 1,
                xxl: 1,
              }}
              dataSource={membersInfo}
              renderItem={(item) => (
                <List.Item key={item.id} className={styles.listItem}>
                  <ScoreCard mainText='In progress' />
                </List.Item>
              )}
            />
          </Space>

          <Space
            direction='vertical'
            align='center'
            className={styles.listContainer}>
            <Text className={styles.titleText}>Players</Text>
            <List
              className={styles.list}
              grid={{
                xs: 1,
                sm: 1,
                md: 1,
                lg: 1,
                xl: 1,
                xxl: 1,
              }}
              dataSource={membersInfo}
              renderItem={(item) => (
                <List.Item key={item.id} className={styles.listItem}>
                  <MemberCardMini
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
        </Space>
      </Space>
      {settingsInfo.scramMasterParticipation ? (
        <Space direction='vertical' align='center'>
          <Radio.Group onChange={onChange} value={voteValue}>
            <List
              className={styles.list}
              grid={{
                xs: 3,
                sm: 4,
                md: 5,
                lg: 6,
                xl: 6,
                xxl: 6,
              }}
              dataSource={voteCardsInfo}
              renderItem={(item) => (
                <List.Item key={item.cardValue} className={styles.listItem}>
                  <Radio value={item.cardValue} className={styles.radioItem}>
                    <VoteCard cardValue={item.cardValue} />
                  </Radio>
                </List.Item>
              )}
            />
          </Radio.Group>
        </Space>
      ) : null}
    </Space>
  );
};

export default ScramMasterGamePage;
