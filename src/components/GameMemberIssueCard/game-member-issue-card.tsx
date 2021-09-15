import { Space, Typography } from 'antd';
import styles from './game-member-issue-card.module.css';

const { Text } = Typography;

type GameMemberIssueCardInfo = {
  current: boolean;
  name: string;
  priority: string;
};

const GameMemberIssueCard = ({
  current,
  name,
  priority,
}: GameMemberIssueCardInfo) => {
  return (
    <div>
      <Space
        align='center'
        className={
          current
            ? `${styles.containerCurrent} ${styles.container}`
            : styles.container
        }>
        <div className={styles.textContainer}>
          {current ? <Text className={styles.textCurrent}>current</Text> : null}
          <Text className={styles.textName}>{name}</Text>
          <Text className={styles.textPriority}>{priority}</Text>
        </div>
      </Space>
    </div>
  );
};

export default GameMemberIssueCard;
