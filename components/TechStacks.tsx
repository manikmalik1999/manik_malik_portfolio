"use client";

import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { techItems } from '@/data';

const TechStacks = () => {
    return (
      <div className='py-20 w-full flex justify-center' id="TechStacks">
        <div className="max-w-7xl w-full px-4" > {/* Adjusted container width */}
        <h1 className="heading text-center mb-10"> {/* Larger gap */}
        Technical <span className="text-purple">Skills</span>
        </h1>
          <div className="space-y-8 w-full">
            <InfiniteMovingCards
              items={techItems}
              variant="tech"
              direction="right"
              speed="slow"
              className="w-full [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
            />
            <InfiniteMovingCards
              items={techItems}
              variant="tech"
              direction="left"
              speed="slow"
              className="w-full [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
            />
          </div>
        </div>
      </div>
    );
  };

export default TechStacks;