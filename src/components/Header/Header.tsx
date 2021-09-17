import { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.mainheader}>
      <div className={styles.blue}> </div>
      <div className={styles.green}> </div>
      <img
        className={styles.logo}
        src='/pplogo2.svg'
        alt='headerlogo'
        width='70'
        height='70'
      />
    </header>
  );
};

export default Header;
