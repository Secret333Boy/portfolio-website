import React from 'react';
import { Typography, Card, Chip } from '@mui/material';

const chipData = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express.js',
  'SQL',
  'HTML',
  'CSS',
  'SASS/SCSS',
];

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1em',
      }}
    >
      <Typography variant="h2">Skills</Typography>
      <Card
        elevation={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 1.5,
        }}
      >
        {chipData.map((item, index) => (
          <Chip label={item} key={index}></Chip>
        ))}
      </Card>
    </section>
  );
};

export default Skills;
