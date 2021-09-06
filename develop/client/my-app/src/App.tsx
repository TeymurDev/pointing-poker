import { FC } from 'react';
import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';

const App: FC = () => {
  return (
    <div className='container'>
      <Header />
      <Content />
    </div>
  );
};

export default App;
