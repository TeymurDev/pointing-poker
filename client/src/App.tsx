import { FC } from 'react';
import './App.css';
import Header from './components/Header/header';
import Content from './components/Content/content';

const App: FC = () => {
  return (
    <div className='container'>
      <Header />
      <Content />
    </div>
  );
};

export default App;
