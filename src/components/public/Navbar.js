import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
let current = useLocation()
  return (
    <div className='bg-slate-900'>

  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href='/' className="flex title-font font-medium items-center mb-4 md:mb-0">
    <img src="/logo.png" className='w-20' alt="family" />
      <span className="ml-3 text-xl">Cyber Pay</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to='/' className={`mr-5 text-white hover:text-yellow-400 ${current.pathname==="/" ? ("border-b-2 border-yellow-400"):("")}`}>Home</Link>
      <Link to='/about' className={`mr-5 text-white hover:text-yellow-400 ${current.pathname==="/about" ? ("border-b-2 border-yellow-400"):("")}`}>About</Link>
      <Link to='/login' className={`mr-5 text-white hover:text-yellow-400 ${current.pathname==="/login" ? ("border-b-2 border-yellow-400"):("")}`}>Login</Link>
      <Link to='/signup' className={`mr-5 text-white hover:text-yellow-400 ${current.pathname==="/sginup" ? ("border-b-2 border-yellow-400"):("")}`}>Signup</Link>
    </nav>

  </div>

    </div>
  )
}

export default Navbar
