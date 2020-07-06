import React from 'react';
import { Router } from '@reach/router'
import styles from './App.module.css';
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Router>
        <AboutMe path='/work_history' />
      </Router>
    </div>
  );
}

export default App;
