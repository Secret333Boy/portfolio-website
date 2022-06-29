import React, { useContext } from 'react';
import { Switch } from '@mui/material';
import ThemeContext from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Switch
      checked={localStorage.getItem('themeMode') === 'dark'}
      onChange={() => {
        toggleTheme();
      }}
    />
  );
};

export default ThemeToggle;
