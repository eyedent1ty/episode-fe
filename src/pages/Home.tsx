import { useState, type FC, type ChangeEvent } from 'react';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import ListOfEventItems from '../components/Events/ListOfEventItems';

import type { Event } from '../types';

import { filterEventsByCategory, filterEventsBySearch } from '../utils';

const events: Event[] = [
  {
    id: 1,
    title: "Exploring the World of Web Development",
    date: "2024-08-01T10:00:00.000Z",
    username: "devGuru",
    price: 10.0,
    category: "Software Development",
    imageURL: "https://via.placeholder.com/150?text=Web+Development",
    location: "San Francisco, CA",
    description: "Learn the latest trends and techniques in web development, including HTML, CSS, and JavaScript."
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    date: "2024-08-05T14:00:00.000Z",
    username: "codeMaster",
    price: 0.0,
    category: "Programming",
    imageURL: "https://via.placeholder.com/150?text=JavaScript",
    location: "Online",
    description: "A comprehensive introduction to JavaScript for those new to programming."
  },
  {
    id: 3,
    title: "Advanced CSS Techniques",
    date: "2024-08-10T09:00:00.000Z",
    username: "styleWizard",
    price: 20.0,
    category: "Web Design",
    imageURL: "https://via.placeholder.com/150?text=CSS",
    location: "New York, NY",
    description: "Master advanced CSS techniques to create stunning web designs."
  },
  {
    id: 4,
    title: "React Native Bootcamp",
    date: "2024-08-15T12:00:00.000Z",
    username: "mobileNinja",
    price: 0.0,
    category: "Mobile Development",
    imageURL: "https://via.placeholder.com/150?text=React+Native",
    location: "Austin, TX",
    description: "An intensive bootcamp covering everything you need to know to build mobile apps with React Native."
  },
  {
    id: 5,
    title: "AI and Machine Learning Symposium",
    date: "2024-08-20T11:00:00.000Z",
    username: "aiExpert",
    price: 50.0,
    category: "Artificial Intelligence",
    imageURL: "https://via.placeholder.com/150?text=AI+Symposium",
    location: "Boston, MA",
    description: "Join experts in AI and machine learning to explore the latest advancements and applications."
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    date: "2024-08-25T16:00:00.000Z",
    username: "secureTech",
    price: 0.0,
    category: "Cybersecurity",
    imageURL: "https://via.placeholder.com/150?text=Cybersecurity",
    location: "Online",
    description: "Learn the fundamentals of cybersecurity to protect your digital assets."
  },
  {
    id: 7,
    title: "Data Science with Python",
    date: "2024-08-30T13:00:00.000Z",
    username: "dataGuru",
    price: 30.0,
    category: "Data Science",
    imageURL: "https://via.placeholder.com/150?text=Data+Science",
    location: "Chicago, IL",
    description: "Discover how to use Python for data science, including data analysis and visualization."
  },
  {
    id: 8,
    title: "UX/UI Design Fundamentals",
    date: "2024-09-05T08:00:00.000Z",
    username: "designPro",
    price: 15.0,
    category: "Design",
    imageURL: "https://via.placeholder.com/150?text=UX+UI+Design",
    location: "Seattle, WA",
    description: "Learn the basics of UX/UI design to create user-friendly interfaces."
  },
  {
    id: 9,
    title: "Cloud Computing Expo",
    date: "2024-09-10T17:00:00.000Z",
    username: "cloudArchitect",
    price: 0.0,
    category: "Cloud Computing",
    imageURL: "https://via.placeholder.com/150?text=Cloud+Computing",
    location: "Las Vegas, NV",
    description: "Explore the latest trends and technologies in cloud computing."
  },
  {
    id: 10,
    title: "Digital Marketing Strategies",
    date: "2024-09-15T15:00:00.000Z",
    username: "marketingGuru",
    price: 25.0,
    category: "Marketing",
    imageURL: "https://via.placeholder.com/150?text=Marketing",
    location: "Online",
    description: "Learn effective digital marketing strategies to boost your online presence."
  }
];

const categories = [
  'All Categories',
  'Mobile Development',
  'Artificial Intelligence',
  'Cybersecurity',
  'Data Science',
  'Design',
  'Cloud Computing',
  'Marketing'
];

const Home: FC = () => {
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
      <div className="mt-10 min-h-screen flex justify-center items-center">
        <ListOfEventItems events={filteredEvents} />
      </div>
    </div>
  );
};

export default Home;
