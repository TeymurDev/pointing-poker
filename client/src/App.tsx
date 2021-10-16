import { FC, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import subscribeToConnection from './api';
import Content from './components/Content/Content';

const App: FC = () => {
  useEffect(() => {
    subscribeToConnection();
  }, []);
  return (
    <Router>
      <div className='container'>
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
