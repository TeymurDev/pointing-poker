import { Space, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './scram-master-card.module.css';

const { Text } = Typography;

export type ScramMasterCardInfo = {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  image: string;
};

const ScramMasterCard = ({
  id,
  firstName,
  lastName,
  position,
  image,
}: ScramMasterCardInfo) => {
  return (
    <Space size={15} align='center' className={styles.container}>
      <Avatar
        size={50}
        src={image}
        icon={<UserOutlined />}
        className={styles.avatar}
      />
      <div className={styles.textContainer}>
        {/* <Text className={styles.textPertain}>It&apos;s you</Text> */}
        <Text className={styles.textName}>
          {firstName} {lastName} {id}
        </Text>
        <Text className={styles.textPost}>{position}</Text>
      </div>
    </Space>
  );
};

export default ScramMasterCard;
