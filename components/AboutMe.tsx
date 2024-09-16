import React from 'react'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <main className='bg-black text-white min-h-screen'>
        <h1 className='text-white text-7xl text-center mb-16 pt-8'>about me.</h1>
        <div className='flex justify-center w-full'>


            <div className="w-7/12 flex justify-center items-center relative">
                {/* Frame SVG */}

                {/* GIF inside an irregular shape */}
                <div
                    className="absolute top-0 left-0 w-[500px] h-[500px] z-0"
                    style={{
                        clipPath: 'polygon(5% 10%, 20% 0%, 50% 5%, 75% 0%, 95% 10%, 100% 35%, 90% 65%, 100% 90%, 75% 100%, 45% 95%, 25% 100%, 0% 85%, 5% 55%)',
                    }}
                >
                    <Image
                        src="/gifs/badminton.gif"
                        alt="badminton"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>



            <div className='text-right w-auto flex flex-col justify-end items-end'>
                <div className='mb-16'>
                    <p className='text-6xl'><strong>likes</strong> 😍</p>
                    <ul className='text-3xl flex flex-col gap-y-2 mt-8'>
                        <li> - badminton 🏸</li>
                        <li> - cute toys 🧸</li>
                        <li> - cats 🙀</li>
                        <li> - code 🤯</li>
                    </ul>   
                </div>  
                <div className=''>
                    <p className='text-6xl'><strong>dis</strong>likes 🤮</p>
                    <ul className='text-3xl mt-8 flex flex-col gap-y-2'>
                        <li> - pineapple 🍍</li>
                        <li> - durian 💩</li>
                    </ul> 
                </div>
            </div>
        </div>
    </main>
  )
}

export default AboutMe