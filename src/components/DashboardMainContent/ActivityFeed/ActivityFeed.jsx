
import styles from './ActivityFeed.module.css';
import { activityChartData, activitySummary } from '../../../data/activityData';

function ActivityFeed() {
  const maxCount = Math.max(...activityChartData.map(d => d.count));

  return (
    <div className={styles.activityCard}>
      <div className={styles.activityHeader}>
        <h3 className={styles.sectionTitle}>Activity</h3>
        <span className={styles.summaryText}>{activitySummary}</span>
      </div>
      <div className={styles.chartContainer}>
        {activityChartData.map((data, index) => (
          <div key={index} className={styles.barWrapper}>
            <div
              className={`${styles.bar} ${index % 2 === 0 ? styles.barBlue : styles.barTeal}`} 
              style={{ height: `${(data.count / maxCount) * 80 + 20}%` }}
            ></div>
            <span className={styles.dayLabel}>{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;

