import { useState, useEffect } from 'react';
import DateTime from '../components/create-event/DateTime';
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

const CreateEventPage = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const [startTimeInput, setStartTimeInput] = useState('12:00 AM');
  const [endTimeInput, setEndTimeInput] = useState('12:00 AM');


  useEffect(() => {
    setStartDate((date) => {
      const newStartDate = new Date(date);
      newStartDate.setHours(24);
      newStartDate.setMinutes(0);
      return newStartDate;
    });

    setEndDate((date) => {
      const newEndDate = new Date(date);
      newEndDate.setHours(24);
      newEndDate.setMinutes(0);
      return newEndDate;
    });
  }, []);


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
            <DateTime
              date={startDate}
              setDate={setStartDate}
              timeInput={startTimeInput}
              setTimeInput={setStartTimeInput}
            />
            <DateTime
              date={endDate}
              setDate={setEndDate}
              timeInput={endTimeInput}
              setTimeInput={setEndTimeInput}
              endDate
              startDate={startDate}
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateEventPage;
