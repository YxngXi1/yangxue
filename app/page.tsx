'use client'

import Object from "@/components/Object";
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [adjective, setAdjective] = useState<string | null>(null);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const adjectiveTyperRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const spans = document.querySelectorAll('h1.name span');
    spans.forEach(span => {
      span.addEventListener('mouseover', () => {
        const spanValue = span as HTMLElement;
        
        console.log(`Hovered over letter: ${spanValue.innerText}`);
        
        if (spanValue.innerText === 'Y') {
          console.log('Setting adjective to Yachtful');
          setAdjective('Yachtful');
        } else if (spanValue.innerText === 'a') {
          console.log('Setting adjective to Ambitious');
          setAdjective('Ambitious');
        }
      });
    });
  }, []);
  
  useEffect(() => {
    if (adjective) {
      console.log(`Adjective set to: ${adjective}`);
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(prev => {
          if (isDeleting) {
            if (prev.length === 0) {
              setIsDeleting(false);
              return '';
            }
            return prev.slice(0, -1);
          } else {
            const nextText = adjective.slice(0, index + 1);
            index++;
            if (nextText === adjective) {
              clearInterval(interval);
            }
            return nextText;
          }
        });
      }, 100); 
      return () => clearInterval(interval);
    }
  }, [adjective, isDeleting]);
  
  useEffect(() => {
    console.log(`Displayed text: ${displayedText}`);
    console.log(`Adjective: ${adjective}`);
    console.log(`Is deleting: ${isDeleting}`);
    if (adjectiveTyperRef.current && adjectiveTyperRef.current.innerText !== adjective && !isDeleting) {
      console.log('Setting isDeleting to true');
      setIsDeleting(true);
    }
  }, [adjective, displayedText]);

  return (
    <>
      <section className="bg-black min-h-screen flex justify-center">
        <div 
          className="absolute"
          style={{
            top: '20%',
            left: '20%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }}
        >
          <Image
            src='/bggraphic1.png'
            height={130}
            width={400}
            alt="dots"
            />
        </div>
        <div 
          className="absolute"
          style={{
            top: '70%',
            left: '60%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }}
        >
          <Image
            src='/bggraphic2.svg'
            height={130}
            width={220}
            alt="dots"
            />
        </div>
        <div 
            className="absolute bg-[#D9D9D9] blur-[100px] w-[100px] h-[100px]"
            style={{
              top: '90%',
              left: '90%',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
            }}
          ></div>
        <div className="w-10/12 mx-auto flex justify-center items-start my-auto">
          
          <div 
            className="absolute bg-[#D9D9D9] blur-[100px] w-[541px] h-[55px]"
            style={{
              top: '50%',
              left: '25%',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
            }}
          ></div>
          
          <div className="flex flex-col gap-y-6 text-left w-7/12">
            <h1 className="text-white text-8xl font-bold blue-box-shadow name flex gap-x-[2px]"><span>Y</span><span>a</span><span>n</span><span>g</span>&nbsp;<span>X</span><span>u</span><span>e</span></h1>
            <p className="text-white text-3xl font-light"><u id="adjectiveTyper" ref={adjectiveTyperRef}>{displayedText}</u> Full Stack Developer</p>
          </div>  
          <div className="w-5/12">
            {/* <Object/> */}
          </div>
        </div>
      </section>
    </>
  );
}