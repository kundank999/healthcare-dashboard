import React from 'react';
import styles from './CalendarView.module.css';
import { calendarDays, primaryAppointments } from '../../../data/calendarData';
import * as Icon from 'lucide-react';

function CalendarView() {
  return (
    <div className={styles.calendarCard}>
      <div className={styles.calendarHeader}>
        <h3 className={styles.monthTitle}>October 2021</h3>
        <div className={styles.navArrows}>
          <Icon.ChevronLeft size={20} className={styles.navIcon} />
          <Icon.ChevronRight size={20} className={styles.navIcon} />
        </div>
      </div>
      <div className={styles.calendarGrid}>
        {calendarDays.map((day, index) => (
          <div key={index} className={`${styles.dayColumn} ${day.hasAppointment ? styles.hasAppointment : ''}`}>
            <div className={styles.dayName}>{day.day}</div>
            <div className={styles.dayDate}>{day.date}</div>
            {day.hasAppointment && day.times.map((time, idx) => (
              <div key={idx} className={styles.appointmentTime}>{time}</div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.appointmentDetails}>
        {primaryAppointments.map(appointment => {
          const AppointmentIcon = Icon[appointment.icon];
          return (
            <div key={appointment.id} className={styles.appointmentDetailCard}>
              {AppointmentIcon && <AppointmentIcon size={24} color="var(--color-primary-blue)" className={styles.detailIcon} />}
              <div className={styles.detailContent}>
                <h4 className={styles.detailTitle}>{appointment.title}</h4>
                <p className={styles.detailTime}>{appointment.time}</p>
                <p className={styles.detailDoctor}>{appointment.doctor}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarView;