import React, { useState } from 'react';
import logo from '../assets/image 1.png'
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faBars   } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='flex w-[90vw] m-auto bg-transparent items-center justify-between'>
      <div className='my-4 ml-2 xl:ml-12 '>
        <img src={logo} alt="logo" className=' cursor-pointer'/>
      </div>
      <FontAwesomeIcon icon={faBars} size='2xl' className="lg:hidden" onClick={()=>setShowMenu(!showMenu)}/>
      {showMenu && 
      <div className='flex flex-col absolute top-20 right-8 py-4 rounded-2xl border-2 bg-slate-100 items-center justify-center lg:hidden'>
        <div className="flex flex-col justify-center items-start p-4 text-black">
                <NavLink className='my-4 mx-7 font-bold text-2xl '>Solutions <FontAwesomeIcon icon={faAngleDown} size='sm' style={{color: "#005eff",}} /></NavLink>
                <NavLink className='my-4 mx-8 font-bold text-2xl '>Features <FontAwesomeIcon icon={faAngleDown} size='sm' style={{color: "#005eff",}} /></NavLink>
                <NavLink className='my-4 mx-8 font-bold text-2xl '>Blogs</NavLink>
                <NavLink className='my-4 mx-8 font-bold text-2xl '>About <FontAwesomeIcon icon={faAngleDown} size='sm' style={{color: "#005eff",}} /></NavLink>
        </div>
        <div className=" flex flex-col items-center justify-center">
            <button className='mx-3 my-3 py-3 px-7 rounded-xl text-sky-700 font-bold border-2 border-sky-700 bg-white'>Login</button>
            <button className='mx-3 py-3 px-7 rounded-xl text-white font-bold bg-sky-700'>Register</button>
        </div>
      </div>
      }

      <div className='hidden lg:flex lg:items-center lg:justify-between lg:w-[85vw]'>
        <div className="p-4 text-black">
                <NavLink className='my-4 font-bold text-2xl lg:mx-2 xl:mx-7'>Solutions <FontAwesomeIcon icon={faAngleDown} size='sm' style={{color: "#005eff",}} /></NavLink>
                <NavLink className='my-4 font-bold text-2xl lg:mx-2 xl:mx-7'>Features <FontAwesomeIcon icon={faAngleDown} size='sm' style={{color: "#005eff",}} /></NavLink>
                <NavLink className='my-4 font-bold text-2xl lg:mx-2 xl:mx-7'>Blogs</NavLink>
                <NavLink className='my-4 font-bold text-2xl lg:mx-2 xl:mx-7'>About <FontAwesomeIcon icon={faAngleDown} size='sm' style={{color: "#005eff",}} /></NavLink>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center">
            <button className='mx-3 py-3 px-7 rounded-xl text-sky-700 font-bold border-2 border-sky-700'>Login</button>
            <button className='mx-3 py-3 px-7 rounded-xl text-white font-bold bg-sky-700'>Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
