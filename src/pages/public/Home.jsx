import React from 'react'

const Home = () => {
  return (
    <div className='flex min-h-[100vh] bg-slate-900'>
        
        <div className="left w-1/2 p-32">

        <h1 className='text-3xl font-bold text-yellow-400 p-3 pl-0'>Cyber Pay</h1>
        <h2 className='text-2xl font-bold text-yellow-300 p-3 pl-0'>Your Money Our Responsibility</h2>
        <p className='text-2xl font-bold text-white p-3 pl-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, harum consequuntur nam, ratione labore eos numquam excepturi optio odit velit cumque autem quibusdam sunt repudiandae laborum vero! Aspernatur ea rem et magnam, vitae aliquam aliquid distinctio, eum dolore ut illo?</p>    
        </div>
        <div className="right w-1/2 p-32">
            <img src="/family.jpg" alt="family pic" className='rounded-2xl rounded-l-none shadow-md border-l-2 border-white pl-28 -ml-10' />
        </div>

    </div>
  )
}

export default Home
