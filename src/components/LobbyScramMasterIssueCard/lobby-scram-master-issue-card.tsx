import { Space, Button, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './lobby-scram-master-issue-card.module.css';

const { Text } = Typography;

export type LobbyScramMasterIssueCardInfo = {
  name: string;
  priority: string;
};

const LobbyScramMasterIssueCard = ({
  name,
  priority,
}: LobbyScramMasterIssueCardInfo) => {
  return (
    <div>
      <Space align='center' className={styles.container}>
        <div className={styles.textContainer}>
          <Text className={styles.textName}>{name}</Text>
          <Text className={styles.textPriority}>{priority}</Text>
        </div>
        <Space size='small'>
          <Button
            shape='circle'
            size='large'
            type='text'
            icon={<EditOutlined />}
            className={styles.editButton}
          />
          <Button
            shape='circle'
            size='large'
            type='text'
            icon={<DeleteOutlined />}
            className={styles.deleteButton}
          />
        </Space>
      </Space>
    </div>
  );
};

export default LobbyScramMasterIssueCard;
