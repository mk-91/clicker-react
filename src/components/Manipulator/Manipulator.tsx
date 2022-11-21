import React from 'react';
import { ManipulatorProps } from '../../helpers/interfaces';
import { Button } from '@mui/material';

const Manipulator: React.FC<ManipulatorProps> = ({ setCount }) => {
  const addOne = () => {
    setCount((prevState) => prevState + 1);
  };

  const retractOne = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <div className='content'>
        <Button variant='contained' onClick={retractOne}>
          -
        </Button>
        <Button variant='contained' onClick={addOne}>
          +
        </Button>
      </div>
    </>
  );
};
export default Manipulator;
