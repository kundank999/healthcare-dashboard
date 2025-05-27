import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />
      <main className={styles.mainContentArea}>
     
      </main>
    </div>
  );
}

export default App;