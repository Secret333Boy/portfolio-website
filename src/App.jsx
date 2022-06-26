import React from 'react';
import { Divider } from '@mui/material';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Divider />
      <About />
      <Divider />
      <section></section>
      <Divider />
    </div>
  );
}

export default App;
