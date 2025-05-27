export const calendarDays = [
  { day: 'Mon', date: 25, hasAppointment: false },
  { day: 'Tues', date: 26, hasAppointment: true, times: ['09:00', '11:00', '13:00'] },
  { day: 'Wed', date: 27, hasAppointment: false },
  { day: 'Thurs', date: 28, hasAppointment: true, times: ['11:00', '15:00'] },
  { day: 'Fri', date: 29, hasAppointment: false },
  { day: 'Sat', date: 30, hasAppointment: true, times: ['12:00', '09:00'] },
  { day: 'Sun', date: 31, hasAppointment: true, times: ['09:00'] },
];

export const primaryAppointments = [
  {
    id: 'dentist',
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: 'Tooth',
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    icon: 'Weight',
  },
];