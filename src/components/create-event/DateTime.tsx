import { useRef, type FC } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { formatTime, formatDateAndTime } from '../../utils';

interface DateTimeProps {
  date: Date;
  setDate: (newDate: Date | ((prev: Date) => Date)) => void;
  timeInput: string;
  setTimeInput: (newTimeInput: string) => void;
  endDate?: boolean;
  startDate: Date;
}

const DateTime: FC<DateTimeProps> = ({
  date,
  setDate,
  timeInput,
  setTimeInput,
  endDate = false,
  startDate
}) => {
  const calendarElement = useRef<HTMLDivElement>(null);

  const handleSelectDate = (selectedDate: Date | undefined) => {
    if (selectedDate === undefined) {
      return;
    }

    selectedDate.setHours(date.getHours());
    selectedDate.setMinutes(date.getMinutes());
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
      setTimeInput(formatTime(date));
      return;
    }

    const meridiem = timeInput
      .slice(timeInput.length - 2, timeInput.length)
      .toLowerCase();

    if (Number.isNaN(Number(hours)) || Number.isNaN(Number(minutes))) {
      setTimeInput(formatTime(date));
      return;
    }

    if (meridiem !== 'am' && meridiem !== 'pm') {
      setTimeInput(formatTime(date));
      return;
    }


    if (meridiem === 'am' && Number(hours) === 12) {
      setDate((prev) => {
        const newDate = new Date(prev);
        newDate.setHours(0);
        newDate.setMinutes(Number(minutes));
        return newDate;
      });
      return;
    }

    setDate((prev) => {
      const newDate = new Date(prev);
      newDate.setHours(Number(hours));
      newDate.setMinutes(Number(minutes));
      return newDate;
    });
  };

  return (
    <Popover onOpenChange={handleBlurTimeInput}>
      <PopoverTrigger asChild>
        <div ref={calendarElement}>
          <div className="relative">
            <CalendarIcon
              className="text-primary absolute top-1/2 left-[10px] -translate-y-1/2"
              size={24}
            />
            <Input
              className="pl-10"
              type="text"
              placeholder="Start Date"
              value={`${!endDate ? 'Start' : 'End'} Date: ${formatDateAndTime(date.toISOString())}`}
              readOnly
            />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex flex-col">
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
          />
          <Button
            className="rounded-none"
            onClick={() => calendarElement.current?.click()}
          >
            Set Date/Time
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateTime;
