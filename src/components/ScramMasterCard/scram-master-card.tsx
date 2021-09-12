import Space from 'antd/lib/space';
import Avatar from 'antd/lib/avatar/avatar';
import Typography from 'antd/lib/typography';
import { UserOutlined } from '@ant-design/icons';
import scramMasterCardCSS from './scram-master-card.module.css';

const { Text } = Typography;

interface ScramMasterCardInfo {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  image: string;
}

const ScramMasterCard = ({
  id,
  firstName,
  lastName,
  position,
  image,
}: ScramMasterCardInfo) => {
  return (
    <div>
      <Space size={15} align='center' className={scramMasterCardCSS.container}>
        <Avatar
          size={50}
          src={image}
          icon={<UserOutlined />}
          className={scramMasterCardCSS.avatar}
        />
        <div className={scramMasterCardCSS.textContainer}>
          {/* <Text className={scramMasterCardCSS.textPertain}>It&apos;s you</Text> */}
          <Text className={scramMasterCardCSS.textName}>
            {firstName} {lastName} {id}
          </Text>
          <Text className={scramMasterCardCSS.textPost}>{position}</Text>
        </div>
      </Space>
    </div>
  );
};

export default ScramMasterCard;
