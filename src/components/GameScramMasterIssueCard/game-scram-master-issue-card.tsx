import { Space, Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './game-scram-master-issue-card.module.css';

const { Text } = Typography;

export type GameScramMasterIssueCardInfo = {
  current: boolean;
  name: string;
  priority: string;
};

const GameScramMasterIssueCard = ({
  current,
  name,
  priority,
}: GameScramMasterIssueCardInfo) => {
  return (
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
      <Button
        shape='circle'
        size='large'
        type='text'
        icon={<PlusOutlined />}
        className={styles.deleteButton}
      />
    </Space>
  );
};

export default GameScramMasterIssueCard;
