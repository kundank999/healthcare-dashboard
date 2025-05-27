import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import styles from './components/App.module.css'; // Correct path to your App.module.css

function App() {
  return (
    <div className={styles.app}>
      <Header /> {/* Header spans full width at the top */}
      <div className={styles.mainLayout}> {/* New container for side-by-side layout */}
        <Sidebar /> {/* Sidebar on the left */}
        <main className={styles.mainContentArea}> {/* Main content area on the right */}
          <DashboardMainContent />
        </main>
      </div>
    </div>
  );
}

export default App;