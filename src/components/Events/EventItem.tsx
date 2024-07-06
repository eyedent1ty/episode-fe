import type { FC } from 'react';

import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card';
import { Badge } from '../ui/badge';

import { formatDateTime } from '../../utils';

interface EventItemProps {
  id: number;
  title: string;
  dateTime: string;
  username: string;
  price: number;
  category: string;
  imageURL: string;
}

const EventItem: FC<EventItemProps> = ({
  id,
  title,
  dateTime,
  username,
  price,
  category,
  imageURL
}) => {
  return (
    <Link to={`/events/${id}`}>
      <Card className="min-w-[300px] max-w-[330px] h-full flex flex-col">
        <CardHeader className="relative h-56 rounded-t-lg">
          <img
            src={imageURL}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="mt-4 flex gap-2 flex-wrap">
            <Badge className="bg-green-200 text-green-700">
              {parseInt(price.toString()) === 0 ? 'FREE' : `$${price}`}
            </Badge>
            <Badge>{category} </Badge>
          </div>
          <CardDescription>{formatDateTime(dateTime)}</CardDescription>
          <CardTitle>{title}</CardTitle>
        </CardContent>
        <CardFooter className="mt-auto">
          <CardDescription>{username}</CardDescription>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default EventItem;
