import { Space, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './create-new-vote-card.module.css';

const CreateVoteCard = () => {
  return (
    <div>
      <Space size={15} align='center' className={styles.container}>
        <Button
          shape='circle'
          type='text'
          icon={<PlusOutlined />}
          className={styles.addButton}
        />
      </Space>
    </div>
  );
};

export default CreateVoteCard;
