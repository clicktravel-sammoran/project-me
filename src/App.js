import React from 'react';
import { Router } from '@reach/router'
import styles from './App.module.css';
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Router>
        <AboutMe path='/work-history' />
        <Projects path='/projects' />
      </Router>
    </div>
  );
}

export default App;
