import { Space, Typography } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';
import styles from './vote-card.module.css';

const { Text } = Typography;

export type VoteCardInfo = {
  cardValue: number | undefined;
};

const VoteCard = ({ cardValue }: VoteCardInfo) => {
  return (
    <div>
      <Space size={15} align='center' className={styles.container}>
        {cardValue ? (
          <>
            <Text className={`${styles.valueText} ${styles.valueTextTop}`}>
              {cardValue}
            </Text>
            <Text className={styles.mainValueText}>{cardValue}</Text>
            <Text className={`${styles.valueText} ${styles.valueTextBottom}`}>
              {cardValue}
            </Text>
          </>
        ) : (
          <>
            <QuestionOutlined
              className={`${styles.valueText} ${styles.valueTextTop}`}
            />
            <QuestionOutlined className={styles.mainValueText} />
            <QuestionOutlined
              className={`${styles.valueText} ${styles.valueTextBottom}`}
            />
          </>
        )}
      </Space>
    </div>
  );
};

export default VoteCard;
