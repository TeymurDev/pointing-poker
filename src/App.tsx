import { FC, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import subscribeToConnection from './api';

const App: FC = () => {
  useEffect(() => {
    subscribeToConnection();
  }, []);
  return (
    <div className='container'>
      <Header />
      <Content />
    </div>
  );
};

export default App;
