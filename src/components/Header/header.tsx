import { FC } from 'react';
import headerCSS from './header.module.css';

const Header: FC = () => {
  return (
    <header className='card'>
      <h1>Main title</h1>
      <button type='button' className={headerCSS.btn}>
        Buy now
      </button>
    </header>
  );
};

export default Header;
