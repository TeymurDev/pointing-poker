import { FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
  return (
    <div className={styles.footercontainer}>
      <a
        className={styles.github}
        href='https://github.com/TeymurDev'
        target='_blank'
        rel='noopener noreferrer'>
        TeymurDev
      </a>
      <a
        className={styles.github}
        href='https://github.com/OBashlaminova'
        target='_blank'
        rel='noopener noreferrer'>
        OBashlaminova
      </a>
      <a
        className={styles.github}
        href='https://github.com/snegurova'
        target='_blank'
        rel='noopener noreferrer'>
        snegurova
      </a>
      <a
        className={styles.rss}
        href='https://rs.school/js/'
        target='_blank'
        rel='noopener noreferrer'>
        <span className={styles.rssyear}>&lsquo;21</span>
      </a>
    </div>
  );
};

export default Footer;
