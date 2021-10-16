import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Space, Button, Typography, List, Radio } from 'antd';
import axios from 'axios';
import styles from './member-game-page.module.css';

import ScramMasterCard, {
  ScramMasterCardInfo,
} from '../../components/ScramMasterCard/scram-master-card';
import GameMemberIssueCard, {
  GameMemberIssueCardInfo,
} from '../../components/GameMemberIssueCard/game-member-issue-card';
import { MemberCardInfo } from '../../components/MemberCard/member-card';
import { SettingsValues } from '../../components/LobbyScramMasterSettings/lobby-scram-master-settings';
import Timer from '../../components/Timer/timer';
import ScoreCard from '../../components/ScoreCard/score-card';
import VoteCard, { VoteCardInfo } from '../../components/VoteCard/vote-card';
import MemberCardMini from '../../components/MemberCardMini/member-card-mini';

const { Text } = Typography;

type MemberGamePageProp = {
  issuesInfo: Array<GameMemberIssueCardInfo>;
  settingsInfo: SettingsValues;
  voteCardsInfo: Array<VoteCardInfo>;
};

type UsersInfo = {
  master: ScramMasterCardInfo;
  users: Array<MemberCardInfo>;
};

const MemberGamePage = ({
  issuesInfo,
  settingsInfo,
  voteCardsInfo,
}: MemberGamePageProp) => {
  const [users, setUsers] = useState<UsersInfo>();
  const [voteValue, setVoteValue] = useState(0);

  const history = useHistory();
  const { roomId } = useParams<{ roomId: string }>();

  const onChange = (event: any) => {
    console.log('radio checked', event.target.value);
    setVoteValue(event.target.value);
  };

  const onExit = () => {
    history.push(``);
  };

  useEffect(() => {
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
      <Text className={styles.sessionTitleText}>Game</Text>
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

      {settingsInfo.timerPresence ? (
        <Timer
          initialMinutes={settingsInfo.timerMinutes}
          initialSeconds={settingsInfo.timerSeconds}
        />
      ) : null}
      <Button type='primary' ghost className={styles.button} onClick={onExit}>
        Exit
      </Button>

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
                <GameMemberIssueCard
                  current={item.current}
                  name={item.name}
                  priority={item.priority}
                />
              </List.Item>
            )}
          />
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
              dataSource={users.users}
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
              dataSource={users.users}
              renderItem={(item) => (
                <List.Item key={item.id} className={styles.listItem}>
                  <MemberCardMini
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
        </Space>
      </Space>
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
    </Space>
  );
};

export default MemberGamePage;
