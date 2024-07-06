import type { FC, ChangeEvent } from 'react';

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

interface FilterProps {
  search: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  categories: string[];
  onSelectedCategoryChange: (newValue: string) => void;
}

const Filter: FC<FilterProps> = ({
  search,
  onSearchChange,
  categories,
  onSelectedCategoryChange
}) => {
  return (
    <div className="flex gap-5 items-center">
      <Input
        type="text"
        placeholder="Search"
        className="flex-1"
        value={search}
        onChange={onSearchChange}
      />
      <Select onValueChange={onSelectedCategoryChange}>
        <SelectTrigger className="flex-1">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
