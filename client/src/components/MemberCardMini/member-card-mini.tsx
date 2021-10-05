import { Space, Button, Avatar, Typography } from 'antd';
import { UserOutlined, StopOutlined } from '@ant-design/icons';
import styles from './member-card-mini.module.css';

import { MemberCardInfo } from '../MemberCard/member-card';

const { Text } = Typography;

const MemberCardMini = ({
  id,
  firstName,
  lastName,
  position,
  image,
}: MemberCardInfo) => {
  return (
    <Space align='center' className={styles.container}>
      <Space size={15} align='center'>
        <Avatar
          size='default'
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
  );
};

export default MemberCardMini;
