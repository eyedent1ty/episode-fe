import type { FC } from 'react';

import type { Event } from '../../types';

import { Button } from '../ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext
} from '../ui/pagination';

interface EventsListPaginationProps {
  pagination: number;
  onChangePaginationValue: (value: number) => void;
  formattedEvents: Event[][]
}

const EventsListPagination: FC<EventsListPaginationProps> = ({
  pagination,
  onChangePaginationValue,
  formattedEvents
}) => {
  const handleClickPrevious = () => {
    onChangePaginationValue(pagination - 1);
  };

  const handleClickNext = () => {
    onChangePaginationValue(pagination + 1);
  };

  const handleSelectPage = (pageNumber: number) => {
    onChangePaginationValue(pageNumber + 1);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            variant="ghost"
            onClick={handleClickPrevious}
            disabled={pagination === 1}
          >
            <PaginationPrevious size="" />
          </Button>
        </PaginationItem>
        {formattedEvents.map((_, i) => (
          <PaginationItem key={i}>
            <Button variant="ghost" onClick={() => handleSelectPage(i)}>
              {i + 1}
            </Button>
          </PaginationItem>
        ))}
        <PaginationItem>
          <Button
            variant="ghost"
            onClick={handleClickNext}
            disabled={pagination === formattedEvents.length}
          >
            <PaginationNext size="" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default EventsListPagination;
