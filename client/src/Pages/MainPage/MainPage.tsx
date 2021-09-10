import { FC } from 'react';
import { Button } from 'antd';
import styles from './MainPage.module.css';

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
        <span className={styles.plantext}>Start your planning:</span>
        <div className={styles.sessioncontainer}>
          <span className={styles.createsession}>Create session:</span>
          <Button type='primary'>Start new Game</Button>
        </div>
        <span className={styles.or}>OR:</span>
        <div className={styles.connecttocontainer}>
          <label className={styles.connectto} htmlFor='connect'>
            Connect to lobby by <span className={styles.url}>URL:</span>
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
