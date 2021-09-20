import { useState } from 'react';
import { Space, Typography, Switch, Select, TimePicker } from 'antd';
import moment from 'moment';
import styles from './lobby-scram-master-settings.module.css';

const { Text } = Typography;
const { Option } = Select;

const format = 'mm:ss';

type SettingsValues = {
  scramMasterParticipation: boolean;
  newMemberAdmission: boolean;
  autoCardsFlip: boolean;
  changeVoteAfterReveal: boolean;
  timerPresence: boolean;
};

const LobbyScramMasterSettings = ({
  scramMasterParticipation,
  newMemberAdmission,
  autoCardsFlip,
  changeVoteAfterReveal,
  timerPresence,
}: SettingsValues) => {
  const [timer, setTimer] = useState(timerPresence);

  return (
    <div>
      <Space align='center' direction='vertical' className={styles.container}>
        <Space
          align='center'
          direction='horizontal'
          className={styles.containerSetting}>
          <Text className={styles.text}>Choose your card set</Text>
          <Select defaultValue='fibonacci' size='middle'>
            <Option value='fibonacci'>Fibonacci</Option>
            <Option value='powersof2'>Powers of 2</Option>
            <Option value='newsequence'>New sequence</Option>
          </Select>
        </Space>
        <Space
          align='center'
          direction='horizontal'
          className={styles.containerSetting}>
          <Text className={styles.text}>
            Scram master participates in the game
          </Text>
          <Switch
            defaultChecked={scramMasterParticipation}
            checkedChildren='on'
            unCheckedChildren='off'
          />
        </Space>
        <Space
          align='center'
          direction='horizontal'
          className={styles.containerSetting}>
          <Text className={styles.text}>Auto-let in for new participants</Text>
          <Switch
            defaultChecked={newMemberAdmission}
            checkedChildren='on'
            unCheckedChildren='off'
          />
        </Space>
        <Space
          align='center'
          direction='horizontal'
          className={styles.containerSetting}>
          <Text className={styles.text}>
            Auto-flip of cards after voting is completed
          </Text>
          <Switch
            defaultChecked={autoCardsFlip}
            checkedChildren='on'
            unCheckedChildren='off'
          />
        </Space>
        <Space
          align='center'
          direction='horizontal'
          className={styles.containerSetting}>
          <Text className={styles.text}>Changing the vote after reveal</Text>
          <Switch
            defaultChecked={changeVoteAfterReveal}
            checkedChildren='on'
            unCheckedChildren='off'
          />
        </Space>
        <Space
          align='center'
          direction='horizontal'
          className={styles.containerSetting}>
          <Text className={styles.text}>Timer</Text>
          <Switch
            defaultChecked={timerPresence}
            checkedChildren='on'
            unCheckedChildren='off'
            onChange={(value) => {
              setTimer(value);
            }}
          />
        </Space>
        {timer ? (
          <Space
            align='center'
            direction='horizontal'
            className={styles.containerSetting}>
            <Text className={styles.text}>Choose round time</Text>
            <TimePicker
              defaultValue={moment('00:00', format)}
              format={format}
            />
          </Space>
        ) : null}
      </Space>
    </div>
  );
};

export default LobbyScramMasterSettings;
