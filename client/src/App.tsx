import { FC } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './Pages/MainPage/MainPage';

const App: FC = () => {
  return (
    <div>
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
