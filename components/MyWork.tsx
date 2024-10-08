'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

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
        
        <div className="flex h-[85vh] w-[300vw]">
          <div className="w-screen bg-black items-center justify-center grid grid-cols-2 text-black">
            <div className='flex justify-center items-center'>
              <div className='bg-[#D9D9D9] border w-7/12 p-10 flex flex-col justify-center items-center'>
                <Image
                  src='/placeholder.jpg'
                  width={400}
                  height={300}
                  alt='image of product'
                  />
                  <div className='text-xl flex flex-col gap-y-12 w-10/12 mt-4'>
                    <p>Built a functioning replica of Netflix, ceompletely working with all the correct features, amassing over 1 million followers</p>
                    <p>Notable Implementations: I created a <strong>new</strong> and <strong>more efficient</strong> way of parsing through <strong>huge datasets</strong></p>
                  </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-40'>
              <div className='bg-[#D9D9D9] border w-6/12 px-6 py-14 flex flex-col justify-center items-left text-left'>
                <h2 className='text-4xl'>features</h2>
                <ul className='text-left text-xl w-full flex flex-col gap-y-2 mt-8'>
                    <li> - Login Integration</li>
                    <li> - Dynamic Billboard</li>
                    <li> - Trending Movies</li>
                    <li> - Favorites</li>
                    <li> - Movie Details</li>
                </ul> 
              </div>
              <button className='bg-[#d9d9d9] px-8 py-10 text-4xl'>Check it out &rarr;</button>
            </div>
          </div>
          <div className="w-screen bg-black flex items-center justify-center">
            <h1 className="text-4xl">Project 2</h1>
          </div>
          <div className="w-screen bg-black flex items-center justify-center">
            <h1 className="text-4xl">Project 3</h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MyWork;