import { Space, Typography, List } from 'antd';
import styles from './game-statistics.module.css';

import VoteCardMini from '../VoteCardMini/vote-card-mini';
import { VoteCardInfo } from '../VoteCard/vote-card';

const { Text } = Typography;

type GameStatisticsInfo = {
  voteCardsInfo: Array<VoteCardInfo>;
  voteStatistics: Array<Number>;
};

const GameStatistics = ({
  voteCardsInfo,
  voteStatistics,
}: GameStatisticsInfo) => {
  return (
    <Space direction='vertical' align='center' className={styles.container}>
      <Text className={styles.titleText}>Statictics</Text>
      <List
        grid={{
          xs: 5,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6,
          xxl: 6,
        }}
        dataSource={voteCardsInfo}
        renderItem={(item, index) => (
          <List.Item key={index} className={styles.listItem}>
            <VoteCardMini cardValue={item.cardValue} />
            <Text className={styles.text}>{voteStatistics[index]}%</Text>
          </List.Item>
        )}
      />
    </Space>
  );
};

export default GameStatistics;
