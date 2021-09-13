import Space from 'antd/lib/space';
import Button from 'antd/lib/button';
import Typography from 'antd/lib/typography';
import { PlusOutlined } from '@ant-design/icons';
import styles from './create-new-issue-card.module.css';

const { Text } = Typography;

const CreateNewIssueCard = () => {
  return (
    <div>
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
    </div>
  );
};

export default CreateNewIssueCard;
