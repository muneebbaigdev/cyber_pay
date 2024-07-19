import React from 'react'

const LoginSignup = ({form}) => {
  return (
    <div className="main flex">
        <div className="flex items-center justify-center lef w-2/5 h-[100dvh]">

            {form}

        </div>
        <div className="right flex bg-slate-100 items-center justify-center w-3/5 h-[100dvh]">
            <img className='h-[80%]' src="https://static.vecteezy.com/system/resources/thumbnails/019/617/753/small_2x/group-of-money-symbol-png.png" alt="background" />
        </div>
    </div>
  )
}

export default LoginSignup
