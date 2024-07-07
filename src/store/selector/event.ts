import type { Event } from '../../types';

const selectEventById = (events: Event[], eventId: number) => {
  return events.find((event) => event.id === eventId);
};

export { selectEventById };
