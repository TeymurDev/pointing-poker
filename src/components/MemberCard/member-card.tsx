import Space from 'antd/lib/space';
import Button from 'antd/lib/button';
import Avatar from 'antd/lib/avatar/avatar';
import Typography from 'antd/lib/typography';
import { UserOutlined, StopOutlined } from '@ant-design/icons';
import styles from './member-card.module.css';

const { Text } = Typography;

type MemberCardInfo = {
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
    <div>
      <Space align='center' className={styles.container}>
        <Space size={15} align='center'>
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
        <Button
          shape='circle'
          size='large'
          type='text'
          icon={<StopOutlined />}
          className={styles.deleteButton}
        />
      </Space>
    </div>
  );
};

export default MemberCard;
