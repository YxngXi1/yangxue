'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

const AboutMe = () => {
  const [currentGif, setCurrentGif] = useState('/gifs/badminton.gif')
  const gifRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = (gif: string) => {
    setCurrentGif(gif)
    gsap.to(gifRef.current, { opacity: 1, duration: 0.5 })
  }

  const handleMouseLeave = () => {
    gsap.to(gifRef.current, { opacity: 1, duration: 0.5 })
    setCurrentGif('/gifs/badminton.gif')
  }

  useEffect(() => {
    gsap.set(gifRef.current, { opacity: 1 })
  }, [])

  return (
    <main className='bg-black text-white min-h-screen'>
        <h1 className='text-white text-7xl text-center mb-16 pt-8'>about me.</h1>
        <div className='flex flex-col lg:flex-row justify-center w-full'>


            <div className="w-7/12 flex justify-center items-center relative">
                {/* Frame SVG */}

                {/* GIF inside an irregular shape */}
                <div
                    ref={gifRef}
                    className="absolute top-0 left-0 w-[500px] h-[500px] z-0"
                    style={{
                        clipPath: 'polygon(5% 10%, 20% 0%, 50% 5%, 75% 0%, 95% 10%, 100% 35%, 90% 65%, 100% 90%, 75% 100%, 45% 95%, 25% 100%, 0% 85%, 5% 55%)',
                    }}
                >
                    <Image
                        src={currentGif}
                        alt="current gif"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>



            <div className='text-right w-auto flex flex-col justify-end items-end'>
                <div className='mb-16'>
                    <p className='text-6xl'><strong>likes</strong> 😍</p>
                    <ul className='text-3xl flex flex-col gap-y-2 mt-8'>
                        <li onMouseEnter={() => handleMouseEnter('/gifs/badminton.gif')} onMouseLeave={handleMouseLeave}> - badminton 🏸</li>
                        <li onMouseEnter={() => handleMouseEnter('/gifs/cute-toys.gif')} onMouseLeave={handleMouseLeave}> - cute toys 🧸</li>
                        <li onMouseEnter={() => handleMouseEnter('/gifs/cats.gif')} onMouseLeave={handleMouseLeave}> - cats 🙀</li>
                        <li onMouseEnter={() => handleMouseEnter('/gifs/code.gif')} onMouseLeave={handleMouseLeave}> - code 🤯</li>
                    </ul>   
                </div>  
                <div className=''>
                    <p className='text-6xl'><strong>dis</strong>likes 🤮</p>
                    <ul className='text-3xl mt-8 flex flex-col gap-y-2'>
                        <li onMouseEnter={() => handleMouseEnter('/gifs/pineapple.gif')} onMouseLeave={handleMouseLeave}> - pineapple 🍍</li>
                        <li onMouseEnter={() => handleMouseEnter('/gifs/durian.gif')} onMouseLeave={handleMouseLeave}> - durian 💩</li>
                    </ul> 
                </div>
            </div>
        </div>
    </main>
  )
}

export default AboutMe