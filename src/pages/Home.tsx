import Hero from '../components/Hero';
import Filter from '../components/Filter';

export default function Home() {
  return (
    <div>
      <Hero />
      <p className="font-medium text-3xl text-center py-10 lg:text-left lg:text-4xl">
        <span className="block">Trusted by</span>
        <span>Thousdand of Events</span>
      </p>
      <Filter />
    </div>
  );
}
