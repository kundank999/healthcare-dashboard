import React from 'react';
import styles from './SimpleAppointmentCard.module.css';
import * as Icon from 'lucide-react';

function SimpleAppointmentCard({ appointment }) {
  const AppointmentIcon = Icon[appointment.icon];

  return (
    <div className={styles.appointmentCard}>
      {AppointmentIcon && <AppointmentIcon size={20} color="var(--color-primary-blue)" className={styles.cardIcon} />}
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{appointment.title}</p>
        <p className={styles.cardTime}>{appointment.time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;