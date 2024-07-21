import type { FC } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { Calendar as CalendarIcon } from 'lucide-react';

import { formatDate } from '../../utils';

interface DateTimeProps {
  date: Date;
  setDate: (newDate: Date) => void;
  timeInput: string;
  setTimeInput: (newTimeInput: string) => void;
  setTime: (newTime: string) => void;
  time: string;
  endDate?: boolean;
}

const DateTime: FC<DateTimeProps> = ({
  date,
  setDate,
  timeInput,
  setTimeInput,
  setTime,
  time,
  endDate = false
}) => {
  const handleSelectDate = (selectedDate: Date | undefined) => {
    if (selectedDate === undefined) {
      return;
    }

    setDate(selectedDate);
  };

  const handleBlurTimeInput = () => {
    let hours: string;
    let minutes: string;

    if (timeInput.length === 8) {
      hours = timeInput.slice(0, 2);
      minutes = timeInput.slice(3, 5);
    } else if (timeInput.length === 7) {
      hours = timeInput.slice(0, 1);
      minutes = timeInput.slice(2, 4);
    } else {
      setTimeInput(time);
      return;
    }

    const meridiem = timeInput
      .slice(timeInput.length - 2, timeInput.length)
      .toLowerCase();

    if (Number.isNaN(Number(hours)) || Number.isNaN(Number(minutes))) {
      setTimeInput(time);
      return;
    }

    if (meridiem !== 'am' && meridiem !== 'pm') {
      setTimeInput(time);
      return;
    }

    setTime(`${hours}:${minutes} ${meridiem.toUpperCase()}`);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <div className="relative">
            <CalendarIcon
              className="text-primary absolute top-1/2 left-[10px] -translate-y-1/2"
              size={24}
            />
            <Input
              className="pl-10"
              type="text"
              placeholder="Start Date"
              value={`${!endDate ? 'Start' : 'End'} Date: ${formatDate(date)} / ${time}`}
              readOnly
            />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelectDate}
            initialFocus
          />
          <Separator />
          <input
            className="rounded-none outline-none text-sm text-primary h-10 px-5"
            type="text"
            value={timeInput}
            onChange={(e) => setTimeInput(e.target.value)}
            onBlur={handleBlurTimeInput}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateTime;
