import React from 'react';
import styles from './AnatomySection.module.css';
import { anatomicalHealthData } from '../../../data/healthStatusData';
import humanBodyImage from '../../../assets/images/human-body.png';
import searchIcon from '../../../assets/icons/search-icon.svg';
function AnatomySection() {
  return (
    <div className={styles.anatomyCard}>
      <h2 className={styles.title}>Dashboard</h2>
      <div className={styles.humanBodyContainer}>
        <img src={humanBodyImage} alt="Human Body Anatomy" className={styles.humanBodyImage} />
        {anatomicalHealthData.map(data => (
          <div
            key={data.id}
            className={`${styles.healthIndicator} ${styles[data.status]}`}
            style={{ top: data.position.top, left: data.position.left }}
          >
            {data.label}
          </div>
        ))}
        <div className={styles.searchOverlay}>
          <img src={searchIcon} alt="Search" /> 
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;