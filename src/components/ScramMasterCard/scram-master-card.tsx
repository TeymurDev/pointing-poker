import Space from 'antd/lib/space';
import Avatar from 'antd/lib/avatar/avatar';
import Typography from 'antd/lib/typography';
import { UserOutlined } from '@ant-design/icons';
import styles from './scram-master-card.module.css';

const { Text } = Typography;

type ScramMasterCardInfo = {
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
    <div>
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
    </div>
  );
};

export default ScramMasterCard;
