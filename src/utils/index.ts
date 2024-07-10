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
const formatDate = (dateTimeString: string) => {
  const date = new Date(dateTimeString);

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

const formatTime = (dateTimeString: string) => {
  const date = new Date(dateTimeString);

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

const formatDateTime = (startDateString: string, endDateString: string) => {
  const formattedStartDate = formatDate(startDateString);
  const formattedStartTime = formatTime(startDateString);

  const formattedEndDate = formatDate(endDateString);
  const formattedEndTime = formatTime(endDateString);

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
  return fullName.length >= 10
};

export {
  filterEventsByCategory,
  filterEventsBySearch,
  formatDateTime,
  isFullnameValid,
  isUsernameValid,
  isPasswordValid
};
