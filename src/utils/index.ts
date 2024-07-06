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

export { filterEventsByCategory, filterEventsBySearch }