import { FC } from 'react';
import { Button, Typography } from 'antd';
import styles from './MainPage.module.css';

const { Text } = Typography;

const MainPage: FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.mainpage}>
        <img
          className={styles.ppimage}
          src='/planningpokerlogo.png'
          alt='logo'
          width='550'
          height='149'
        />
        <Text className={styles.startplan}>Start your planning:</Text>
        <div className={styles.sessioncontainer}>
          <Text className={styles.createsession}>Create session:</Text>
          <Button type='primary'>Start new game</Button>
        </div>
        <Text className={styles.or}>OR:</Text>
        <div className={styles.connecttocontainer}>
          <label className={styles.connectto} htmlFor='connect'>
            Connect to lobby by <Text className={styles.url}>URL:</Text>
            <input
              className={styles.connectinput}
              type='url'
              id='connect'
              required
            />
            <Button type='primary'>Connect</Button>
          </label>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
