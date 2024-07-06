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

const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);

  const optionsDate: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  };

  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', optionsDate).format(
    date
  );
  const formattedTime = new Intl.DateTimeFormat('en-US', optionsTime).format(
    date
  );

  return `${formattedDate} / ${formattedTime}`;
};

export { filterEventsByCategory, filterEventsBySearch, formatDateTime };
