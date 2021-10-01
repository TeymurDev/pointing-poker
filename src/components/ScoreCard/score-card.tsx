import { Space, Typography } from 'antd';
import styles from './score-card.module.css';

const { Text } = Typography;

type ScoreCardInfo = {
  mainText: string;
};

const ScoreCard = ({ mainText }: ScoreCardInfo) => {
  return (
    <div>
      <Space align='center' className={styles.container}>
        <Text className={styles.text}>{mainText}</Text>
      </Space>
    </div>
  );
};

export default ScoreCard;
