import React from 'react';
import styles from './UpcomingSchedule.module.css';
import { upcomingSchedule } from '../../../data/upcomingAppointments';
import SimpleAppointmentCard from '../../SimpleAppointmentCard/SimpleAppointmentCard';

function UpcomingSchedule() {
  return (
    <div className={styles.upcomingScheduleCard}>
      <h3 className={styles.sectionTitle}>The Upcoming Schedule</h3>
      <div className={styles.scheduleList}>
        {upcomingSchedule.map((dayData, index) => (
          <div key={index} className={styles.dayGroup}>
            <p className={styles.dayLabel}>{dayData.day}</p>
            <div className={styles.appointmentsGrid}>
              {dayData.appointments.map(appointment => (
                <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingSchedule;