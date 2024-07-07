import type { FC } from 'react';

import { motion } from 'framer-motion';

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
  endDateTime: string;
  username: string;
  price: number;
  category: string;
  imageURL: string;
}

const EventItem: FC<EventItemProps> = ({
  id,
  title,
  dateTime,
  endDateTime,
  username,
  price,
  category,
  imageURL
}) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <Link to={`/events/${id}`}>
        <Card className="min-w-[300px] w-[330px] max-w-[330px] h-[456px] flex flex-col">
          <CardHeader className="relative h-56 rounded-t-lg bg-cover bg-center">
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
            <CardDescription>{formatDateTime(dateTime, endDateTime)}</CardDescription>
            <CardTitle>{title}</CardTitle>
          </CardContent>
          <CardFooter className="mt-auto">
            <CardDescription>{username}</CardDescription>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default EventItem;
