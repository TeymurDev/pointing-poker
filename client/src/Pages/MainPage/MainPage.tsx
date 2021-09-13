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
          src='/planningpoker.png'
          alt='pp'
          width='550'
          height='149'
        />
        <Text
          style={{
            marginTop: '40px',
            marginRight: '517px',
            fontSize: '48px',
            color: '#66999b',
            fontWeight: 700,
          }}>
          Start your planning:
        </Text>
        <div className={styles.sessioncontainer}>
          <Text
            style={{ marginRight: '100px', fontWeight: 300, fontSize: '24px' }}>
            Create session:
          </Text>
          <Button type='primary'>Start new game</Button>
        </div>
        <Text
          style={{
            marginTop: '45px',
            marginRight: '501px',
            fontWeight: 700,
            fontSize: '48px',
            color: '#66999b',
          }}>
          OR:
        </Text>
        <div className={styles.connecttocontainer}>
          <label className={styles.connectto} htmlFor='connect'>
            Connect to lobby by{' '}
            <Text
              style={{
                fontWeight: 700,
                color: '#66999b',
                marginLeft: '7px',
              }}>
              URL:
            </Text>
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
