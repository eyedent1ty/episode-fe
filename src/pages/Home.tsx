import { useState, type FC, type ChangeEvent } from 'react';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import ListOfEventItems from '../components/Events/ListOfEventItems';

import { filterEventsByCategory, filterEventsBySearch } from '../utils';

import { useAppSelector } from '../store/hooks';

const Home: FC = () => {
  const events = useAppSelector((state) => state.events);
  const categories = useAppSelector((state) => state.categories);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearcChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSelectedCategoryChange = (newValue: string) => {
    setSelectedCategory(newValue);
  };

  const filteredEvents = filterEventsBySearch(
    filterEventsByCategory(events, selectedCategory),
    search
  );

  return (
    <div>
      <Hero />
      <p className="font-medium text-3xl text-center py-10 lg:text-left lg:text-4xl">
        <span className="block">Trusted by</span>
        <span>Thousdand of Events</span>
      </p>
      <Filter
        search={search}
        onSearchChange={handleSearcChange}
        categories={categories}
        onSelectedCategoryChange={handleSelectedCategoryChange}
      />
      <div className="mt-16 min-h-screen flex justify-center items-center">
        <ListOfEventItems events={filteredEvents} />
      </div>
    </div>
  );
};

export default Home;
