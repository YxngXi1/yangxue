'use client'

// import Object from "@/components/Object";
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
        
        let newAdjective = null;
        if (spanValue.innerText === 'Y') {
          newAdjective = 'Yachtful';
        } else if (spanValue.innerText === 'a') {
          newAdjective = 'Ambitious';
        } else if (spanValue.innerText === 'n') {
          newAdjective = 'Nimble';
        } else if (spanValue.innerText === 'g') {
          newAdjective = 'Gallant';
        } else if (spanValue.innerText === 'X') {
          newAdjective = 'Xenial';
        } else if (spanValue.innerText === 'u') {
          newAdjective = 'Unique';
        } else if (spanValue.innerText === 'e') {
          newAdjective = 'Enthusiastic';
        }

        if (newAdjective && newAdjective !== adjective && newAdjective !== adjectiveTyperRef.current?.innerText) {
          console.log(`Setting isDeleting to true for new adjective: ${newAdjective}`);
          setIsDeleting(true);
          setAdjective(newAdjective);
        }
      });
    });
  }, [adjective]);
  
  useEffect(() => {
    if (adjective && !isDeleting) {
      console.log(`Adjective set to: ${adjective}`);
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(prev => {
          const nextText = adjective.slice(0, index + 1);
          index++;
          if (nextText === adjective) {
            clearInterval(interval);
          }
          return nextText;
        });
      }, 100); 
      return () => clearInterval(interval);
    }
  }, [adjective, isDeleting]);
  
  useEffect(() => {
    if (isDeleting) {
      const interval = setInterval(() => {
        setDisplayedText(prev => {
          if (prev.length === 0) {
            setIsDeleting(false);
            return '';
          }
          return prev.slice(0, -1);
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isDeleting]);

  return (
    <>
      <section className="bg-black flex justify-center items-center min-h-screen">
        <div className="container flex justify-center min-h-screen">
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
                left: '30%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0,
              }}
            ></div>
            
            <div className="flex flex-col gap-y-6 text-left lg:w-7/12 w-11/12">
              <h1 className="h-full w-full text-white text-8xl font-bold blue-box-shadow name gap-x-[2px] break-all-words text-wrap">
                <div className="leading-wide"><span>Y</span><span>a</span><span>n</span><span>g</span>&nbsp;<span>X</span><span>u</span><span>e</span></div>
              </h1>
              <p className="text-white text-3xl font-light min-h-[60px]">
                <u id="adjectiveTyper" ref={adjectiveTyperRef}>{displayedText}</u> Full Stack Developer
              </p>
            </div>  
            <div className="lg:w-5/12">
              {/* <Object/> */}
            </div>
          </div>
        </div>
      </section> 
    </>
  );
}