import React from 'react'

const Sendmoney = () => {
  return (
    <div className='h-[100vh] bg-slate-900 pt-12'>

      <form className='w-1/2 h-[70vh] mx-auto rounded-lg shadow-lg text-center pt-10'>
        <input className='w-2/3 bg-white text-slate-900 text-2xl h-24 my-5 rounded-md shadow-lg ' type="text" placeholder='Receiver Account Number' />
        <input className='w-2/3 bg-white text-slate-900 text-2xl h-24 my-5 rounded-md shadow-lg ' type="text" placeholder='Receiver Account Name' />
        <input className='w-2/3 bg-white text-green-500 text-4xl h-24 my-5 rounded-md shadow-lg ' type="number" placeholder='Amount' />
        <button className='w-2/3 bg-green-500 text-white text-3xl h-24 my-5 rounded-md shadow-lg hover:bg-red-500'>Send Money</button>
      </form>
      
    </div>
  )
}

export default Sendmoney
