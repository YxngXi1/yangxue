'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Netflix from './projects/Netflix'
import Johnfrasersac from './projects/Johnfrasersac'
import Physiobuddy from './projects/Physiobuddy'

gsap.registerPlugin(ScrollTrigger);

const MyWork = () => {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const horizontalSection = horizontalRef.current;

      if (horizontalSection) {
        const totalWidth = horizontalSection.scrollWidth - window.innerWidth;

        // Horizontal Scroll Animation
        gsap.to(horizontalSection, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalSection,
            start: "top top",
            end: () => `+=${horizontalSection.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
          },
        });
      }
    }, horizontalRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className='bg-black min-h-screen text-white overflow-x-hidden'>
      {/* Horizontal Scroll Section */}
      <div ref={horizontalRef} className="relative">
        {/* Sticky Heading */}
        <h1 ref={headingRef} className='text-white text-7xl text-center pt-8 top-0 w-full'>
          my work.
        </h1>
        
        <div className="flex h-[80vh] w-[300vw]">
          <Netflix/>
          <Johnfrasersac/>
          <Physiobuddy/>
        </div>
      </div>
    </main>
  )
}

export default MyWork;