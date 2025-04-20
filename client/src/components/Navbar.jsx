import React from 'react'
import { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import {useUser, useClerk,UserButton} from "@clerk/clerk-react"
import { AppContext } from '../context/AppContext'
import { set } from 'mongoose'
const Navbar = () => {

  const {openSignIn} = useClerk();
  const {user} = useUser();

  const navigate = useNavigate()
  const {setShowRecruiterLogin} = useContext(AppContext)
  return (
    <div className='shadow py-4 '>
    <div className='container px-4 2xl:px-20 mx-auto flex justify-between'>
    <img onClick ={()=> navigate('/')} src={assets.logo} alt="logo " className="w-auto h-7 mt-1 cursor-pointer" />
    {
      user ?
      <div className='flex items-center gap-3'>
        <Link to={'/applications'}>Applied Jobs</Link>
        <p >|</p>
        <p className='max-lg:hidden'>Hi, {user.firstName + " " + user.lastName}</p>
        <UserButton/>
      </div>
      :
      <div className='flex gap-4 max-sm:text-xs '>
    <button onClick={e=> setShowRecruiterLogin(true)} className='cursor-pointer'>Recruiter Login </button>
    <button onClick={e => openSignIn()} className='rounded-full py-2 px-6 text-white bg-yellow-400 cursor-pointer ' >Login</button>
</div>
    }

    </div>
    </div>
  )
}

export default Navbar