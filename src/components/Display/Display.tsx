import React from 'react';
import { DisplayProps } from '../../helpers/interfaces';
import Typography from '@mui/material/Typography';

const Display: React.FC<DisplayProps> = ({ count }) => {
  const generateRandomNumber = () => {
    return Math.random();
  };

  return (
    <>
      <Typography>Random number: {generateRandomNumber()}</Typography>
      <Typography>{count}</Typography>
    </>
  );
};

export default Display;
