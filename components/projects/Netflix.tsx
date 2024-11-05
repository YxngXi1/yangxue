import React from 'react'
import Image from 'next/image'

const Netflix = () => {
  return (
    <div className="w-screen bg-black items-center justify-center grid grid-cols-2 gap-x-16 text-black">
        <div className='flex justify-end items-end h-[637px]'>
            <div className='w-7/12 bg-[#D9D9D9] border p-10 flex flex-col justify-center items-center'>
            <Image
                src='/placeholder.jpg'
                width={400}
                height={300}
                alt='image of product'
                className='border-black border box-shadow  w-[427px] h-[232px] object-cover'
                />
                <div className='text-xl flex flex-col gap-y-12 w-10/12 mt-4'>
                <p>Built a functioning replica of Netflix, ceompletely working with all the correct features, amassing over 1 million followers</p>
                <p>Notable Implementations: I created a <strong>new</strong> and <strong>more efficient</strong> way of parsing through <strong>huge datasets</strong></p>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-start  flex-grow w-1/2 gap-y-24'>
            <div className='bg-[#D9D9D9] px-6 py-14 w-full flex flex-col justify-center items-start text-left flex-grow'>
                <h2 className='text-4xl'>features</h2>
                <ul className='text-left text-xl w-full flex flex-col gap-y-2 mt-8'>
                    <li> - Login Integration</li>
                    <li> - Dynamic Billboard</li>
                    <li> - Trending Movies</li>
                    <li> - Favorites</li>
                    <li> - Movie Details</li>
                </ul> 
            </div>
            <button className='bg-[#d9d9d9] px-16 py-10 text-4xl'>Check it out &rarr;</button>
        </div>
    </div>
  )
}

export default Netflix;