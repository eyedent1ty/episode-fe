import type { FC } from 'react';

import { Input } from './ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem
} from './ui/select';

const Filter: FC = () => {
  return (
    <div className="flex gap-5 items-center">
      <Input type="text" placeholder="Search" className="flex-1" />
      <Select>
        <SelectTrigger className="flex-1">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            <SelectItem value="Development">Development</SelectItem>
            <SelectItem value="Business">Business</SelectItem>
            <SelectItem value="Finance & Accounting">Finance & Accounting</SelectItem>
            <SelectItem value="IT & Software">IT & Software</SelectItem>
            <SelectItem value="Office Productivty">Office Productivity</SelectItem>
            <SelectItem value="Personal Development">Personal Development</SelectItem>
            <SelectItem value="Design">Design</SelectItem>
            <SelectItem value="Marketing">Marketig</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
