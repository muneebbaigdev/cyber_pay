import React from 'react'

const Forgetpassword = () => {
  return (

     <form className='h-3/5 w-3/4 border border-slate-200 shadow-lg text-center pt-20'>
      <img src="/logo.png" className="h-24 mx-auto -mt-10" alt="logo" />
    <input className='w-3/5 p-3 m-3 border border-slate-200 shadow-md' placeholder='Your Email' type="email" name='email' />
    <button className='w-3/5 p-3 m-3 border border-slate-200 shadow-md bg-yellow-500' type='submit'>Get OTP</button>
    </form>

  )
}

export default Forgetpassword
