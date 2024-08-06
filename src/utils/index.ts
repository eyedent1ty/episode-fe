import { Event } from '../types';

const filterEventsByCategory = (events: Event[], category: string) => {
  if (category.toLowerCase() === 'all categories') {
    return events;
  }

  return events.filter((event) =>
    event.category.toLowerCase().includes(category.toLowerCase())
  );
};

const filterEventsBySearch = (events: Event[], search: string) => {
  return events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );
};

// dateTimeString -> Date ISOStringFormat
const formatDate = (d: string | Date) => {
  const date = new Date(d);

  const optionsDate: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', optionsDate).format(
    date
  );

  return formattedDate;
};

const formatTime = (d: string | Date) => {
  const date = new Date(d);

  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  const formattedTime = new Intl.DateTimeFormat('en-US', optionsTime).format(
    date
  );

  return formattedTime;
};

const formatDateAndTime = (d: string | Date) => {
  const formattedDate = formatDate(d);
  const formattedTime = formatTime(d);
  return `${formattedDate} / ${formattedTime}`;
};

const formatStartEndDateTime = (startDate: string | Date, endDate: string | Date) => {
  const formattedStartDate = formatDate(startDate);
  const formattedStartTime = formatTime(startDate);

  const formattedEndDate = formatDate(endDate);
  const formattedEndTime = formatTime(endDate);

  if (formattedStartDate === formattedEndDate) {
    return `${formattedStartDate} / ${formattedStartTime} - ${formattedEndTime}`;
  }
  return `${formattedStartDate} / ${formattedStartTime} - ${formattedEndDate} / ${formattedEndTime}`;
};

// REGISTRATION
const isPasswordValid = (password: string) => {
  return password.length >= 8;
};

const isUsernameValid = (username: string) => {
  return username.length >= 8;
};

const isFullnameValid = (fullName: string) => {
  return fullName.length >= 10;
};

/** timeString - 11:59 PM / 9:00 AM */
const timeToMilliseconds = (date: Date, timeString: string) => {
  const dateCopy = new Date(date);
  dateCopy.setHours(0, 0, 0, 0);

  const [time, meridiem] = timeString.split(' ');
  let [hours, minutes] = time.split(':').map(Number);

  if (meridiem.toUpperCase() === 'PM' && hours !== 12) {
    hours += 12;
  } else if (meridiem.toUpperCase() === 'AM' && hours === 12) {
    hours = 0;
  }

  dateCopy.setHours(hours, minutes, 0, 0);

  return dateCopy.getTime();
};

export {
  filterEventsByCategory,
  filterEventsBySearch,
  formatDate,
  formatTime,
  formatStartEndDateTime,
  isFullnameValid,
  isUsernameValid,
  isPasswordValid,
  timeToMilliseconds,
  formatDateAndTime
};
