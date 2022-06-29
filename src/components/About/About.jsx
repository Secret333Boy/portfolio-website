import React from 'react';
import { Typography, Avatar } from '@mui/material';
import meImage from './img/me.jpg';

const About = () => {
  return (
    <section id="about">
      <Typography variant="h2">About me</Typography>
      <Avatar src={meImage} sx={{ width: 150, height: 150 }} />
    </section>
  );
};

export default About;
