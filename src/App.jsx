import React, { useState, useMemo } from 'react';
import { Paper, Divider, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ThemeContext from './context/ThemeContext.js';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Education from './components/Education/Education.jsx';
import Achievements from './components/Achievements/Achievements.jsx';
import Projects from './components/Projects/Projects.jsx';
import Courses from './components/Courses/Courses.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  if (
    useMediaQuery('(prefers-color-scheme: dark)') &&
    !localStorage.getItem('themeMode')
  )
    localStorage.setItem('themeMode', 'dark');
  const [themeMode, setThemeMode] = useState(localStorage.getItem('themeMode'));
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );
  return (
    <div className="App">
      <ThemeContext.Provider
        value={{
          toggleTheme: () => {
            localStorage.setItem(
              'themeMode',
              themeMode === 'dark' ? 'light' : 'dark'
            );
            setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
          },
        }}
      >
        <ThemeProvider theme={theme}>
          <Paper sx={{ minHeight: '100vh' }} square>
            <Header />
            <Divider />
            <About />
            <Divider />
            <Education />
            <Divider />
            <Achievements />
            <Divider />
            <Projects />
            <Divider />
            <Courses />
            <Divider />
            <Footer />
          </Paper>
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
