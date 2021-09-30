import { useState, useEffect } from 'react';
import { Space, Typography } from 'antd';
import styles from './timer.module.css';

const { Title } = Typography;

type timerInfo = {
  initialMinutes: number;
  initialSeconds: number;
};

const Timer = ({ initialMinutes, initialSeconds }: timerInfo) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Space
      className={
        seconds === 0 && minutes === 0
          ? styles.containerTimerEnd
          : styles.container
      }>
      <Title>{minutes < 10 ? `0${minutes}` : minutes}</Title>
      <Title>:</Title>
      <Title>{seconds < 10 ? `0${seconds}` : seconds}</Title>
      {seconds === 0 && minutes === 0 ? (
        <div className={styles.timerText}>Time&apos;s up</div>
      ) : null}
    </Space>
  );
};

export default Timer;
