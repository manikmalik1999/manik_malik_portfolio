'use client';

import { cn } from '@/utils/cn';
import React, { useEffect, useState } from 'react';

type ContentItem = 
  | { 
      type: 'testimonial';
      quote: string;
      name: string;
      title: string;
      profileImg: string;
    }
  | {
      type: 'tech';
      name: string;
      profileImg: string;
    };

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  variant = 'testimonial',
  className
}: {
  items: ContentItem[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  variant?: 'testimonial' | 'tech';
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse'
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration = variant === 'tech' ? '80s' : // Slower for tech
        speed === 'fast' ? '20s' :
        speed === 'normal' ? '40s' :
        '60s';
      containerRef.current.style.setProperty('--animation-duration', duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
          variant === 'tech' && 'gap-8' // Smaller gap for tech items
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              'relative rounded-2xl border flex-shrink-0 transition-all duration-300',
              variant === 'tech' 
                ? 'w-28 h-28 p-4 border-slate-700 hover:bg-white/10 hover:scale-105 group hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]' // Adjusted hover background
                : 'w-[90vw] max-w-full border-slate-800 p-5 md:p-16 md:w-[60vw] bg-gradient-to-r from-slate-900 to-slate-800'
            )}
            style={{
              background: variant === 'tech' ? 'rgba(255, 255, 255, 0.05)' : 'transparent', // Subtle background for tech items
            }}
          >
            {item.type === 'testimonial' ? (
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <div className="me-3">
                    <img
                      src={item.profileImg}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl leading-[1.6] text-white font-bold">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-white-200 font-normal">
                      {item.title}
                    </span>
                  </div>
                </div>
              </blockquote>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  src={item.profileImg}
                  alt={item.name}
                  className={cn(
                    'object-contain transition-transform duration-300',
                    variant === 'tech' ? 'w-16 h-16 group-hover:scale-110' : 'w-20 h-20'
                  )}
                />
                <span className={cn(
                  'mt-2 text-center font-medium transition-colors duration-300',
                  variant === 'tech' ? 'text-xs text-white group-hover:text-white/90 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-sm text-slate-900'
                )}>
                  {item.name}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;