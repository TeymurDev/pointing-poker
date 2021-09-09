import { FC, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import socket from './api';

const App: FC = () => {
  useEffect(() => {
    socket.on('connect', () => {
      console.log(`Socket id: ${socket.id} connected`);
    });
  }, []);
  return (
    <div className='container'>
      <Header />
      <Content />
    </div>
  );
};

export default App;
