import type { FC } from 'react';

import { Button } from './ui/button';

const Hero: FC = () => {
  return (
    <main>
      <div className="flex flex-col bg-secondary gap-5 px-3 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <section className="flex flex-col text-center gap-5 lg:gap-10 sm:flex-1 md:text-left">
            <strong className="space-y-2 uppercase font-bold text-4xl md:space-y-5 sm:space-y-3 md:text-5xl lg:text-7xl ">
              <p>Celebrate:</p>
              <p>Make it</p>
              <p>memorable.</p>
            </strong>
            <p className="md:text-xl">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button className="rounded-full px-10 lg:text-lg lg:py-6">Explore now</Button>
            </div>
          </section>
          <section className="flex-1 flex justify-center items-center p-8">
            <img src="https://placehold.co/500x400" />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;
