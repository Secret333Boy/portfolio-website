import React from 'react';
import { Avatar } from '@mui/material';
import me from './img/me.jpg';

export default function About() {
  return (
    <section>
      <Avatar src={me} sx={{ width: 150, height: 150 }}></Avatar>
    </section>
  );
}
