import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { privateNav, publicNav } from '../../routes'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const logedIn = useSelector(state => state.authentication.authentic)
let current = useLocation()
  return (
    <div className='bg-slate-900 text-white'>

  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href='/' className="flex title-font font-medium items-center mb-4 md:mb-0">
    <img src="/logo.png" className='w-20' alt="family" />
      <span className="ml-3 text-xl">Cyber Pay</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      {!logedIn ? (publicNav.map((link)=>(
        <Link to={link.link} className={`mr-5 text-white hover:text-yellow-400 ${current.pathname===link.link ? ("border-b-2 border-yellow-400"):("")}`}>{link.text}</Link>
      ))):(privateNav.map((link)=>(
        <Link to={link.link} className={`mr-5 text-white hover:text-yellow-400 ${current.pathname===link.link ? ("border-b-2 border-yellow-400"):("")}`}>{link.text}</Link>
      )))}
      

    </nav>

  </div>

    </div>
  )
}

export default Navbar
