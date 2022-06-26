import React from 'react';
import { Button } from '@mui/material';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <Button href="">About me</Button>
      <Button href="">Education</Button>
      <Button href="">Achievements</Button>
      <Button href="">Projects</Button>
      <Button href="">Courses</Button>
      <ThemeToggle />
    </header>
  );
}
