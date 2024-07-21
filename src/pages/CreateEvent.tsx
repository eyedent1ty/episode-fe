import { useState } from 'react';
import Separator from '../components/Separator';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem
} from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { MapPin } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '../components/ui/popover';
import { Calendar } from '../components/ui/calendar';
import { Calendar as CalendarIcon } from 'lucide-react';

import { formatDate } from '../utils';

const CreateEventPage = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [startTimeInput, setStartTimeInput] = useState('11:59 PM');
  const [startTime, setStartTime] = useState(startTimeInput);

  const handleSelectStartDate = (selectedDate: Date | undefined) => {
    if (!selectedDate) {
      return;
    }

    setStartDate(selectedDate);
  };

  const handleChangeStartTime = () => {
    let hours: string;
    let minutes: string;

    if (startTimeInput.length === 8) {
      hours = startTimeInput.slice(0, 2);
      minutes = startTimeInput.slice(3, 5);
    } else if (startTimeInput.length === 7) {
      hours = startTimeInput.slice(0, 1);
      minutes = startTimeInput.slice(2, 4);
    } else {
      setStartTimeInput(startTime);
      return;
    }

    const meridiem = startTimeInput
      .slice(startTimeInput.length - 2, startTimeInput.length)
      .toLowerCase();

    if (Number.isNaN(Number(hours)) || Number.isNaN(Number(minutes))) {
      setStartTimeInput(startTime);
      return;
    }

    if (meridiem !== 'am' && meridiem !== 'pm') {
      console.log(meridiem);
      setStartTimeInput(startTime);
      return;
    }

    setStartTime(`${hours}:${minutes} ${meridiem.toUpperCase()}`);
  };

  return (
    <div className="mt-10">
      <header className="h-20 flex items-center">
        <h1 className="text-4xl font-semibold">Create an Event</h1>
      </header>
      <Separator />
      <main className="mt-10">
        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <Input type="text" placeholder="Event Title" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="Software Development">
                    Software Development
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <Textarea placeholder="Description" />
          </div>

          <div className="relative">
            <MapPin
              className="text-primary absolute top-1/2 left-[10px] -translate-y-1/2"
              size={24}
            />
            <Input className="pl-10" type="text" placeholder="Location" />
          </div>

          <div className="grid grid-cols-2 gap-5">
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
                      value={`Start Date: ${formatDate(startDate)}`}
                      readOnly
                    />
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div>
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={handleSelectStartDate}
                    initialFocus
                  />
                  <Separator />
                  <input
                    className="rounded-none outline-none text-sm text-primary h-10 px-5"
                    type="text"
                    value={startTimeInput}
                    onChange={(e) => setStartTimeInput(e.target.value)}
                    onBlur={handleChangeStartTime}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateEventPage;
