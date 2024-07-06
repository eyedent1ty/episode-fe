import { useState, type FC } from 'react';

import type { Event } from '../../types';

import EventItem from './EventItem';
import EventsListPagination from './EventsListPagination';

interface ListOfEventItemsProps {
  events: Event[];
}

const ListOfEventItems: FC<ListOfEventItemsProps> = ({ events }) => {
  const [pagination, setPagination] = useState(1);

  const formattedEvents = [];
  let currentEvents: Event[] = [];

  for (let i = 0; i < events.length; i++) {
    currentEvents.push(events[i]);

    if (currentEvents.length === 6 || i === events.length - 1) {
      formattedEvents.push(currentEvents);
      currentEvents = [];
    }
  }

  const handleChangePaginationValue = (value: number) => {
    setPagination(value);
  };

  return (
    formattedEvents.length ? (
      <main>
        <ul className="flex justify-center gap-5 flex-wrap">
          {formattedEvents[pagination - 1].map((event) => (
            <li key={event.id}>
              <EventItem {...event} />
            </li>
          ))}
        </ul>
        {formattedEvents.length > 1 && (
          <footer className="my-10">
            <EventsListPagination
              onChangePaginationValue={handleChangePaginationValue}
              pagination={pagination}
              formattedEvents={formattedEvents}
            />
          </footer>
        )}
      </main>
    ) : <p className="text-center">No Results..</p>
  );
};

export default ListOfEventItems;
