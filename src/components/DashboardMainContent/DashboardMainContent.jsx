import styles from './DashboardMainContent.module.css';
import AnatomySection from './AnatomySection/AnatomySection';
import HealthStatusCards from './HealthStatusCards/HealthStatusCards';
import CalendarView from './CalendarView/CalendarView';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from './ActivityFeed/ActivityFeed';

function DashboardMainContent() {
  return (
    <div className={styles.dashboardGrid}>
      <AnatomySection className={styles.anatomyArea} />
      <HealthStatusCards className={styles.healthStatusArea} />
      <CalendarView className={styles.calendarArea} />
      <ActivityFeed className={styles.activityFeedArea} />
      <UpcomingSchedule className={styles.scheduleArea} />

    </div>
  );
}

export default DashboardMainContent;