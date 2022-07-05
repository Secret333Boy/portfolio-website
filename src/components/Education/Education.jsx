import React from 'react';
import { Typography, Card, Avatar, Divider } from '@mui/material';
import uniLogo from './img/NTUU_KPI_logo.png';

const Education = () => {
  return (
    <section
      id="education"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1em',
      }}
    >
      <Typography variant="h2">Education</Typography>
      <Card
        elevation={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '50vw',
          p: 1.5,
        }}
      >
        <Avatar src={uniLogo} sx={{ width: 150, height: 150 }} />
        <Divider
          variant="middle"
          orientation="vertical"
          flexItem
          sx={{ ml: 1, mr: 1 }}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          optio fugiat minima esse iure facilis et, inventore doloremque ea
          excepturi eaque, provident aperiam voluptatibus, expedita libero
          reiciendis. Corrupti, culpa quam! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Sequi, quisquam quaerat numquam
          provident ratione cupiditate aspernatur in totam. In qui ut tempore a
          quis ad, nam beatae nisi! Neque, quia.
        </p>
      </Card>
    </section>
  );
};

export default Education;
