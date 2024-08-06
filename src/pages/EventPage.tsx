import { useParams } from 'react-router';

import { CalendarClock, MapPin } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

import { useAppSelector } from '../store/hooks';
import { selectEventById } from '../store/selector/event';
import { formatStartEndDateTime } from '../utils';

export default function EventPage() {
  const params = useParams();
  const event = useAppSelector((state) =>
    selectEventById(state.events, Number(params.id))
  );

  return (
    event && (
      <main className="pb-10 flex items-center md:h-[calc(100vh-72px)] md:justify-center">
        <article className="flex flex-col gap-5 md:flex-row md:items-center">
          <section className="flex justify-center items-center">
            <img src={event.imageURL} height={450} width={450} />
          </section>
          <section className="text-center space-y-3 md:text-left md:space-y-6">
            <h1 className="font-bold text-3xl">{event.title}</h1>
            <div className="flex justify-center flex-wrap gap-2 md:justify-start">
              <Badge className="bg-green-200 text-green-700">
                {parseInt(event.price.toString()) === 0
                  ? 'FREE'
                  : `$${event.price}`}
              </Badge>
              <Badge>{event.category} </Badge>
              <p>
                by{' '}
                <span className="text-primary font-bold">{event.username}</span>
              </p>
            </div>
            <Button className="rounded-full">{parseInt(event.price.toString()) === 0 ? 'Get' : 'Buy'} Ticket</Button>
            <div className="flex flex-col items-center md:items-start">
              <p className="flex justify-center gap-2">
                <CalendarClock size={24} />
                {formatStartEndDateTime(event.dateTime, event.endDateTime)}
              </p>
              <p className="flex justify-center items-center gap-2">
                <MapPin size={24} />
                {event.location}
              </p>
            </div>
            <div>
              <p className="text-primary font-bold">What You'll Learn:</p>
              <p>{event.description}</p>
            </div>
          </section>
        </article>
      </main>
    )
  );
}
