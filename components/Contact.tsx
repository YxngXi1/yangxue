import React from 'react'

const Contact = () => {
  return (
    <main className='bg-black text-white min-h-screen'>
        <h1 className='text-white text-5xl text-center mb-16 pt-8'>Connect with me!</h1>
        <div className='flex justify-center items-center'>
            <p className='w-1/4'>Always so happy to connect and meet new people, so always feel free to shoot me a dm, email, or connection on linkedin! (except i like never accept linkedin connections unless u send a message with it)</p>
            <div className='w-3/4'>
                {/* idea: make a folder system like the HTN website to manage 3 forms of contact. Email, Discord, and LinkedIn */}
            </div>
        </div>
    </main>
  )
}

export default Contact