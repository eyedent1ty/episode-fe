import type { FC } from 'react';

import EventItem from './EventItem';

import type { Event } from '../../types';

interface ListOfEventItemsProps {
  events: Event[];
}

const ListOfEventItems: FC<ListOfEventItemsProps> = ({ events }) => {
  return (
    <ul className="flex justify-center gap-5 flex-wrap">
      {events.map((event) => (
        <li key={event.id}>
          <EventItem {...event} />
        </li>
      ))}
    </ul>
  );
};

export default ListOfEventItems;
