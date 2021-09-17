import { FC, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import subscribeToConnection from './api';

const App: FC = () => {
  useEffect(() => {
    subscribeToConnection();
  }, []);
  return (
    <div className='container'>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

export default App;
