import type { FC } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card';
import { Badge } from '../ui/badge';

interface EventItemProps {
  id: number;
  title: string;
  date: string;
  username: string;
  price: number;
  category: string;
  imageURL: string;
}

const EventItem: FC<EventItemProps> = ({
  title,
  date,
  username,
  price,
  category,
  imageURL
}) => {
  return (
    <Card className="min-w-[300px] max-w-[330px] h-full flex flex-col">
      <CardHeader
        className="relative h-56 rounded-t-lg"
      >
        <img src={imageURL} className="absolute top-0 left-0 w-full h-full object-cover" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mt-4 flex gap-2 flex-wrap">
          <Badge className="bg-green-200 text-green-700">
            {parseInt(price.toString()) === 0 ? 'Free' : `$${price}`}
          </Badge>
          <Badge>{category} </Badge>
        </div>
        <CardDescription>{date}</CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardContent>
      <CardFooter className="mt-auto">
        <CardDescription>{username}</CardDescription>
      </CardFooter>
    </Card>
  );
};

export default EventItem;
