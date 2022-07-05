import React from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <nav style={{ flexGrow: 1 }}>
          <Button href="#about">About me</Button>
          <Button href="#education">Education</Button>
          <Button href="#skills">Skills</Button>
          <Button href="#achievements">Achievements</Button>
          <Button href="#projects">Projects</Button>
          <Button href="#courses">Courses</Button>
        </nav>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
