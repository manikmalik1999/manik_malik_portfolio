import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { companies, testimonials } from '@/data';
import Image from 'next/image';

const Clients = () => {
  // Transform testimonials to match the new ContentItem type
  const formattedTestimonials = testimonials.map(testimonial => ({
    type: 'testimonial' as const,
    quote: testimonial.quote,
    name: testimonial.name,
    title: testimonial.title,
    profileImg: testimonial.profileImg
  }));

  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Recommendations from
        <span className="text-purple"> Managers/ Colleagues</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={formattedTestimonials}
            variant="testimonial"
            direction="right"
            speed="slow"
            className="[--animation-duration:40s]"
          />
        </div>

        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <Image src={img} alt={name} className="md:w-10 w-5" width={id === 4 || id === 5 ? 100 : 150} />
              <Image
                src={nameImg}
                alt={name}
                width={id === 4 || id === 5 ? 100 : 150}
                className="md:w-24 w-20"
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Clients;