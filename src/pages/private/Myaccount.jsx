import React from 'react'

const Myaccount = () => {
  return (
    <div className='h-[100vh] bg-slate-900 flex'>

      <div className="left border-r-2 py-20 border-white w-1/2 text-center inline-block">

      <img src="/dp.jpg" alt="dp" className='m-10 w-72 mx-auto rounded-full' />
      <h2 className='text-white text-4xl m-12'>Muneeb baig</h2>

      </div>

      <div className="right w-1/2 mt-28">
        <p className='text-4xl text-white mx-5 my-20'>Account Number: <span className='text-green-500'>797979379472374237489739797</span></p>
        <p className='text-4xl text-white mx-5 my-20'>Account Balance: <span className='text-green-500 text-5xl'>89897</span></p>
      </div>
      
    </div>
  )
}

export default Myaccount
