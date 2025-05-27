import React from 'react';
import styles from './HealthStatusCards.module.css';
import { organHealthCards } from '../../../data/healthStatusData';
import * as Icon from 'lucide-react';

function HealthStatusCards() {
  return (
    <div className={styles.cardsContainer}>
      {organHealthCards.map(card => {
        const CardIcon = Icon[card.icon];
        return (
          <div key={card.id} className={styles.healthCard}>
            <div className={styles.cardHeader}>
              {CardIcon && <CardIcon size={24} color="var(--color-primary-blue)" />}
              <span className={styles.cardTitle}>{card.name}</span>
            </div>
            <p className={styles.cardDate}>Date: {card.date}</p>
            <div className={styles.statusBar}>
                    <div
                        className={`${styles.progressBar} ${styles[card.status]}`}
                        style={{ width: `${card.progress}%` }}
                    ></div>
            </div>
            <p className={styles.statusText}>{card.status === 'healthy' ? 'Healthy' : 'Issue Detected'}</p>
            <a href="#" className={styles.detailsLink} onClick={(e) => e.preventDefault()}>Details</a>
          </div>
        );
      })}
    </div>
  );
}

export default HealthStatusCards;



