import React from 'react';
import { Typography, Avatar, Card, Divider } from '@mui/material';
import meImage from './img/me.jpg';

const About = () => {
  return (
    <section
      id="about"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1em',
      }}
    >
      <Typography variant="h2">About me</Typography>
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
        <Avatar src={meImage} sx={{ width: 150, height: 150 }} />
        <Divider
          variant="middle"
          orientation="vertical"
          flexItem
          sx={{ ml: 1, mr: 1 }}
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          illo, fugit officiis mollitia accusamus asperiores blanditiis earum,
          velit ratione natus numquam debitis vel animi iusto illum facere,
          incidunt ex! Delectus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Architecto, doloremque, aperiam corporis sint
          nostrum quod fugit nihil placeat est aliquid vitae quaerat dolorum
          debitis beatae voluptatem. At delectus aut numquam?
        </p>
      </Card>
    </section>
  );
};

export default About;
