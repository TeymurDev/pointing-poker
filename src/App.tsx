import { FC, useEffect } from 'react';
import './App.css';
import Header from './components/Header/header';
import Content from './components/Content/content';
import socket from './Api';

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
