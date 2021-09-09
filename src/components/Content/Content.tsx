import { FC } from 'react';
import { DatePicker, Button } from 'antd';
import contentCSS from './Content.module.css';
import img from '../../assets/logo.svg';

const Content: FC = () => {
  return (
    <div className='card'>
      <p>
        {' '}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit magnam,
        optio explicabo ea error quidem ipsum eligendi incidunt! Excepturi hic
        recusandae asperiores provident, reiciendis odit cum quisquam quia
        ratione eaque.
      </p>
      <button type='button' className={contentCSS.btn}>
        Buy now
      </button>
      <Button />
      <div>
        <DatePicker />
      </div>
      <div>
        <img src={img} alt='react' width='100' height='100' />
        <img src='/favicon.ico' alt='reactblack' />
      </div>
    </div>
  );
};

export default Content;
