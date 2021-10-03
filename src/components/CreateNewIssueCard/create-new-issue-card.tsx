import { Space, Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './create-new-issue-card.module.css';

const { Text } = Typography;

const CreateNewIssueCard = () => {
  return (
    <Space align='center' className={styles.container}>
      <Text className={styles.text}>Create new Issue</Text>
      <Button
        shape='circle'
        size='large'
        type='text'
        icon={<PlusOutlined />}
        className={styles.addButton}
      />
    </Space>
  );
};

export default CreateNewIssueCard;
