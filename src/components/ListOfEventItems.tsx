import type { FC } from 'react';

import EventItem from './EventItem';

const events = [
  {
    id: 1,
    title: "Exploring the World of Web Development",
    date: new Date().toISOString(),
    username: "devGuru",
    price: 10.0,
    category: "Software Development",
    imageURL: "https://via.placeholder.com/150?text=Web+Development"
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    date: new Date().toISOString(),
    username: "codeMaster",
    price: 0.0,
    category: "Programming",
    imageURL: "https://via.placeholder.com/150?text=JavaScript"
  },
  {
    id: 3,
    title: "Advanced CSS Techniques",
    date: new Date().toISOString(),
    username: "styleWizard",
    price: 20.0,
    category: "Web Design",
    imageURL: "https://via.placeholder.com/150?text=CSS"
  },
  {
    id: 4,
    title: "React Native Bootcamp",
    date: new Date().toISOString(),
    username: "mobileNinja",
    price: 0.0,
    category: "Mobile Development",
    imageURL: "https://via.placeholder.com/150?text=React+Native"
  },
  {
    id: 5,
    title: "AI and Machine Learning Symposium",
    date: new Date().toISOString(),
    username: "aiExpert",
    price: 50.0,
    category: "Artificial Intelligence",
    imageURL: "https://via.placeholder.com/150?text=AI+Symposium"
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    date: new Date().toISOString(),
    username: "secureTech",
    price: 0.0,
    category: "Cybersecurity",
    imageURL: "https://via.placeholder.com/150?text=Cybersecurity"
  },
  {
    id: 7,
    title: "Data Science with Python",
    date: new Date().toISOString(),
    username: "dataGuru",
    price: 30.0,
    category: "Data Science",
    imageURL: "https://via.placeholder.com/150?text=Data+Science"
  },
  {
    id: 8,
    title: "UX/UI Design Fundamentals",
    date: new Date().toISOString(),
    username: "designPro",
    price: 15.0,
    category: "Design",
    imageURL: "https://via.placeholder.com/150?text=UX+UI+Design"
  },
  {
    id: 9,
    title: "Cloud Computing Expo",
    date: new Date().toISOString(),
    username: "cloudArchitect",
    price: 0.0,
    category: "Cloud Computing",
    imageURL: "https://via.placeholder.com/150?text=Cloud+Computing"
  },
  {
    id: 10,
    title: "Digital Marketing Strategies",
    date: new Date().toISOString(),
    username: "marketingGuru",
    price: 25.0,
    category: "Marketing",
    imageURL: "https://via.placeholder.com/150?text=Marketing"
  }
];

const ListOfEventItems: FC = () => {
  return (
    <ul className="flex justify-center gap-5 flex-wrap">
      {events.map((event) => (
        <li key={event.id}>
          <EventItem {...event} />
        </li>
      ))}
    </ul>
  );
};

export default ListOfEventItems;
