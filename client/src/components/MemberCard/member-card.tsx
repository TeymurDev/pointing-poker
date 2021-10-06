import { Space, Button, Avatar, Typography } from 'antd';
import { UserOutlined, StopOutlined } from '@ant-design/icons';
import styles from './member-card.module.css';

const { Text } = Typography;

export type MemberCardInfo = {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  image: string;
};

const MemberCard = ({
  id,
  firstName,
  lastName,
  position,
  image,
}: MemberCardInfo) => {
  return (
    <Space key={id} align='center' className={styles.container}>
      <Space size={15} align='center'>
        <Avatar
          size={50}
          src={image}
          icon={<UserOutlined />}
          className={styles.avatar}
        />
        <div className={styles.textContainer}>
          <Text className={styles.textName}>
            {firstName} {lastName}
          </Text>
          <Text className={styles.textPost}>{position}</Text>
        </div>
      </Space>
      <Button
        shape='circle'
        size='large'
        type='text'
        icon={<StopOutlined />}
        className={styles.deleteButton}
      />
    </Space>
  );
};

export default MemberCard;
