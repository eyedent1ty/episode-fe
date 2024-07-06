import type { Event } from '../types';

const events: Event[] = [
  {
    id: 1,
    title: 'Annual Web Development Conference',
    dateTime: '2024-08-01T10:00:00.000Z',
    endDateTime: '2024-08-01T18:00:00.000Z',
    username: 'webDevMaster',
    price: 25.0,
    category: 'Web Development',
    imageURL: 'https://picsum.photos/500/500?random=1',
    location: 'San Francisco, CA',
    description:
      'Join us for a day of workshops and talks on the latest trends in web development.'
  },
  {
    id: 2,
    title: 'Intro to Machine Learning Workshop',
    dateTime: '2024-08-05T14:00:00.000Z',
    endDateTime: '2024-08-05T17:00:00.000Z',
    username: 'mlEnthusiast',
    price: 0.0,
    category: 'Machine Learning',
    imageURL: 'https://picsum.photos/500/500?random=2',
    location: 'Online',
    description:
      'Learn the basics of machine learning and its applications in real-world scenarios.'
  },
  {
    id: 3,
    title: 'UX/UI Design Summit',
    dateTime: '2024-08-10T09:00:00.000Z',
    endDateTime: '2024-08-10T16:00:00.000Z',
    username: 'uxDesignPro',
    price: 30.0,
    category: 'Design',
    imageURL: 'https://picsum.photos/500/500?random=3',
    location: 'New York, NY',
    description:
      'Explore the future of user experience and user interface design with industry leaders.'
  },
  {
    id: 4,
    title: 'Blockchain Technology Conference',
    dateTime: '2024-08-15T12:00:00.000Z',
    endDateTime: '2024-08-16T12:00:00.000Z',
    username: 'cryptoExpert',
    price: 50.0,
    category: 'Blockchain',
    imageURL: 'https://picsum.photos/500/500?random=4',
    location: 'Austin, TX',
    description:
      'Discover the potential of blockchain technology and its impact on various industries.'
  },
  {
    id: 5,
    title: 'Digital Marketing Strategies Workshop',
    dateTime: '2024-08-20T11:00:00.000Z',
    endDateTime: '2024-08-20T15:00:00.000Z',
    username: 'digitalMarketer',
    price: 15.0,
    category: 'Marketing',
    imageURL: 'https://picsum.photos/500/500?random=5',
    location: 'Boston, MA',
    description:
      "Learn effective digital marketing strategies to enhance your brand's online presence."
  },
  {
    id: 6,
    title: 'Artificial Intelligence Conference',
    dateTime: '2024-08-25T16:00:00.000Z',
    endDateTime: '2024-08-25T20:00:00.000Z',
    username: 'aiResearcher',
    price: 40.0,
    category: 'Artificial Intelligence',
    imageURL: 'https://picsum.photos/500/500?random=6',
    location: 'Online',
    description:
      'Explore the latest breakthroughs and applications in artificial intelligence.'
  },
  {
    id: 7,
    title: 'Mobile App Development Bootcamp',
    dateTime: '2024-09-01T09:00:00.000Z',
    endDateTime: '2024-09-02T17:00:00.000Z',
    username: 'appDevNinja',
    price: 0.0,
    category: 'Mobile Development',
    imageURL: 'https://picsum.photos/500/500?random=7',
    location: 'Seattle, WA',
    description:
      'An intensive bootcamp covering iOS and Android app development from basics to advanced techniques.'
  },
  {
    id: 8,
    title: 'Data Science Hackathon',
    dateTime: '2024-09-05T13:00:00.000Z',
    endDateTime: '2024-09-05T18:00:00.000Z',
    username: 'dataScienceEnthusiast',
    price: 0.0,
    category: 'Data Science',
    imageURL: 'https://picsum.photos/500/500?random=8',
    location: 'Chicago, IL',
    description:
      'Compete in a 1-day hackathon to solve real-world data science challenges and showcase your skills.'
  },
  {
    id: 9,
    title: 'Cloud Computing Expo',
    dateTime: '2024-09-10T10:00:00.000Z',
    endDateTime: '2024-09-10T16:00:00.000Z',
    username: 'cloudArchitect',
    price: 20.0,
    category: 'Cloud Computing',
    imageURL: 'https://picsum.photos/500/500?random=9',
    location: 'Las Vegas, NV',
    description:
      'Explore the latest trends and technologies in cloud computing with industry experts.'
  },
  {
    id: 10,
    title: 'Cybersecurity Symposium',
    dateTime: '2024-09-15T11:00:00.000Z',
    endDateTime: '2024-09-15T15:00:00.000Z',
    username: 'cyberSecurityPro',
    price: 25.0,
    category: 'Cybersecurity',
    imageURL: 'https://picsum.photos/500/500?random=10',
    location: 'Washington, D.C.',
    description:
      'A symposium discussing the latest cybersecurity threats, strategies, and best practices.'
  },
  {
    id: 11,
    title: 'Virtual Reality Workshop',
    dateTime: '2024-09-20T13:00:00.000Z',
    endDateTime: '2024-09-20T17:00:00.000Z',
    username: 'vrEnthusiast',
    price: 0.0,
    category: 'Virtual Reality',
    imageURL: 'https://picsum.photos/500/500?random=11',
    location: 'Online',
    description:
      'Explore the world of virtual reality and its applications in various industries.'
  },
  {
    id: 12,
    title: 'Python Programming Bootcamp',
    dateTime: '2024-09-25T09:00:00.000Z',
    endDateTime: '2024-09-26T17:00:00.000Z',
    username: 'pythonDev',
    price: 30.0,
    category: 'Programming',
    imageURL: 'https://picsum.photos/500/500?random=12',
    location: 'San Diego, CA',
    description:
      'An intensive bootcamp covering Python programming from fundamentals to advanced topics.'
  },
  {
    id: 13,
    title: 'UI Design Trends Seminar',
    dateTime: '2024-10-01T10:00:00.000Z',
    endDateTime: '2024-10-01T15:00:00.000Z',
    username: 'uiDesignExpert',
    price: 15.0,
    category: 'Design',
    imageURL: 'https://picsum.photos/500/500?random=13',
    location: 'London, UK',
    description:
      'Discover the latest trends and best practices in user interface design.'
  },
  {
    id: 14,
    title: 'Startup Pitch Competition',
    dateTime: '2024-10-05T14:00:00.000Z',
    endDateTime: '2024-10-05T18:00:00.000Z',
    username: 'startupFounder',
    price: 0.0,
    category: 'Entrepreneurship',
    imageURL: 'https://picsum.photos/500/500?random=14',
    location: 'Berlin, Germany',
    description:
      'Pitch your startup idea to investors and industry experts for a chance to win funding and support.'
  },
  {
    id: 15,
    title: 'IoT Innovation Conference',
    dateTime: '2024-10-10T09:00:00.000Z',
    endDateTime: '2024-10-10T17:00:00.000Z',
    username: 'iotEnthusiast',
    price: 40.0,
    category: 'Internet of Things',
    imageURL: 'https://picsum.photos/500/500?random=15',
    location: 'Barcelona, Spain',
    description:
      'Explore the latest innovations and applications in the Internet of Things (IoT) industry.'
  },
  {
    id: 16,
    title: 'Big Data Analytics Workshop',
    dateTime: '2024-10-15T11:00:00.000Z',
    endDateTime: '2024-10-15T16:00:00.000Z',
    username: 'bigDataAnalyst',
    price: 25.0,
    category: 'Data Science',
    imageURL: 'https://picsum.photos/500/500?random=16',
    location: 'Toronto, Canada',
    description:
      'Learn how to analyze and derive insights from large datasets using advanced analytics tools.'
  },
  {
    id: 17,
    title: 'E-commerce Strategies Summit',
    dateTime: '2024-10-20T13:00:00.000Z',
    endDateTime: '2024-10-20T17:00:00.000Z',
    username: 'ecommerceExpert',
    price: 20.0,
    category: 'E-commerce',
    imageURL: 'https://picsum.photos/500/500?random=17',
    location: 'Sydney, Australia',
    description:
      'Explore effective strategies and innovations in e-commerce to drive sales and customer engagement.'
  },
  {
    id: 18,
    title: 'AI in Healthcare Symposium',
    dateTime: '2024-10-25T09:00:00.000Z',
    endDateTime: '2024-10-25T16:00:00.000Z',
    username: 'healthcareAI',
    price: 35.0,
    category: 'Healthcare',
    imageURL: 'https://picsum.photos/500/500?random=18',
    location: 'Washington, D.C.',
    description:
      'Discuss the impact of artificial intelligence on healthcare delivery, diagnostics, and patient care.'
  },
  {
    id: 19,
    title: 'Startup Growth Strategies Workshop',
    dateTime: '2024-11-01T10:00:00.000Z',
    endDateTime: '2024-11-01T15:00:00.000Z',
    username: 'startupAdvisor',
    price: 15.0,
    category: 'Entrepreneurship',
    imageURL: 'https://picsum.photos/500/500?random=19',
    location: 'Tokyo, Japan',
    description:
      "Learn effective growth strategies and tactics for scaling your startup in today's competitive market."
  },
  {
    id: 20,
    title: 'Cloud Security Conference',
    dateTime: '2024-11-05T14:00:00.000Z',
    endDateTime: '2024-11-05T18:00:00.000Z',
    username: 'cloudSecurityExpert',
    price: 30.0,
    category: 'Cloud Computing',
    imageURL: 'https://picsum.photos/500/500?random=20',
    location: 'Paris, France',
    description:
      'Explore best practices and solutions for securing cloud environments and data.'
  },
  {
    id: 21,
    title: 'UI/UX Design Bootcamp',
    dateTime: '2024-11-10T09:00:00.000Z',
    endDateTime: '2024-11-11T17:00:00.000Z',
    username: 'designBootcamper',
    price: 40.0,
    category: 'Design',
    imageURL: 'https://picsum.photos/500/500?random=21',
    location: 'London, UK',
    description:
      'An immersive bootcamp covering all aspects of UI/UX design, from wireframing to prototyping.'
  },
  {
    id: 22,
    title: 'Data Privacy Seminar',
    dateTime: '2024-11-15T11:00:00.000Z',
    endDateTime: '2024-11-15T15:00:00.000Z',
    username: 'privacyAdvocate',
    price: 0.0,
    category: 'Data Security',
    imageURL: 'https://picsum.photos/500/500?random=22',
    location: 'Berlin, Germany',
    description:
      "Discuss the importance of data privacy and compliance in today's digital age."
  },
  {
    id: 23,
    title: 'Future of AI in Business',
    dateTime: '2024-11-20T13:00:00.000Z',
    endDateTime: '2024-11-20T18:00:00.000Z',
    username: 'aiBusinessLeader',
    price: 25.0,
    category: 'Business',
    imageURL: 'https://picsum.photos/500/500?random=23',
    location: 'Chicago, IL',
    description:
      'Explore how AI is transforming industries and shaping the future of business.'
  },
  {
    id: 24,
    title: 'Digital Transformation Summit',
    dateTime: '2024-11-25T09:00:00.000Z',
    endDateTime: '2024-11-25T16:00:00.000Z',
    username: 'digitalTransformation',
    price: 35.0,
    category: 'Technology',
    imageURL: 'https://picsum.photos/500/500?random=24',
    location: 'San Francisco, CA',
    description:
      'Learn how digital transformation is reshaping businesses and industries globally.'
  },
  {
    id: 25,
    title: 'Blockchain for Beginners',
    dateTime: '2024-12-01T10:00:00.000Z',
    endDateTime: '2024-12-01T14:00:00.000Z',
    username: 'blockchainBeginner',
    price: 0.0,
    category: 'Blockchain',
    imageURL: 'https://picsum.photos/500/500?random=25',
    location: 'New York, NY',
    description:
      'An introductory workshop to blockchain technology and its applications beyond cryptocurrencies.'
  },
  {
    id: 26,
    title: 'Virtual Reality in Education',
    dateTime: '2024-12-05T14:00:00.000Z',
    endDateTime: '2024-12-05T18:00:00.000Z',
    username: 'vrEducator',
    price: 20.0,
    category: 'Education',
    imageURL: 'https://picsum.photos/500/500?random=26',
    location: 'Online',
    description:
      'Explore how virtual reality is revolutionizing education and immersive learning experiences.'
  },
  {
    id: 27,
    title: 'Social Media Marketing Workshop',
    dateTime: '2024-12-10T09:00:00.000Z',
    endDateTime: '2024-12-10T16:00:00.000Z',
    username: 'socialMediaExpert',
    price: 30.0,
    category: 'Marketing',
    imageURL: 'https://picsum.photos/500/500?random=27',
    location: 'Los Angeles, CA',
    description:
      'Learn strategies and techniques to leverage social media platforms for marketing and brand promotion.'
  },
  {
    id: 28,
    title: 'AI Ethics Conference',
    dateTime: '2024-12-15T11:00:00.000Z',
    endDateTime: '2024-12-15T15:00:00.000Z',
    username: 'aiEthicist',
    price: 0.0,
    category: 'Ethics',
    imageURL: 'https://picsum.photos/500/500?random=28',
    location: 'Washington, D.C.',
    description:
      'Discuss the ethical implications of AI technologies and responsible AI development.'
  },
  {
    id: 29,
    title: 'Startup Funding Workshop',
    dateTime: '2024-12-20T13:00:00.000Z',
    endDateTime: '2024-12-20T17:00:00.000Z',
    username: 'startupFunding',
    price: 15.0,
    category: 'Entrepreneurship',
    imageURL: 'https://picsum.photos/500/500?random=29',
    location: 'Toronto, Canada',
    description:
      'Learn how to secure funding for your startup through effective pitching and investor relations.'
  },
  {
    id: 30,
    title: 'Advanced Web Security Seminar',
    dateTime: '2024-12-25T09:00:00.000Z',
    endDateTime: '2024-12-25T14:00:00.000Z',
    username: 'webSecurityExpert',
    price: 25.0,
    category: 'Cybersecurity',
    imageURL: 'https://picsum.photos/500/500?random=30',
    location: 'London, UK',
    description:
      'Deep dive into advanced techniques and strategies for securing web applications and infrastructure.'
  }
];

export default events;