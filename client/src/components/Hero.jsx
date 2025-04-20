import React, { useContext,useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {
    const {setSearchFilter, setIsSearched} = useContext(AppContext)

    const titleRef = useRef(null)
    const locationRef = useRef(null)
    const onSearched = () =>{
      setSearchFilter({
        title:titleRef.current.value,
        location: locationRef.current.value
      })
      setIsSearched(true)
      console.log({
        title:titleRef.current.value,
        location: locationRef.current.value
      })
    }

  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
      <div className='bg-gradient-to-r from-blue-400 to-blue-800 text-center mx-2 rounded-xl p-12 text-white'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4 '> Over 50,000 Jobs Await You</h2>
        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5 '>Discover Jobs That Inspire You . Explore Internships and Job opportunities And Take the First Step Towards Your Future!</p>
        <div className='flex items-center justify-between bg-white text-gray-600 max-w-xl pl-3 mx-2 sm:mx-auto rounded'>
        <div className='flex items-center'>
        <img  className='h-4 sm:h-5' src={assets.search_icon} alt="search" />
          <input type="text" placeholder='Search for Jobs'
            className='max-sm:text-xs p-2 rounded  outline-none w-full bg-white' 
            ref={titleRef}
          />
        </div>
        <div className='flex items-center'>
        <img className='h-4 sm:h-5' src={assets.location_icon} alt="location" />
          <input type="text" placeholder='Location'
            className='max-sm:text-xs p-2 rounded  outline-none w-full bg-white'
            ref={locationRef}
          />
        </div>
          <button onClick={onSearched} className='bg-yellow-400 px-6 py-2 rounded text-white m-1 cursor-pointer'>Search</button>
          </div>
      </div>
      <div className='border border-gray-300 shadow-md mx-2 p-6 rounded-md flex my-3'>
        <div className='flex justify-center gap-10 lg:gap-16 flex-wrap' >
          <p className='font-medium text-gray-400'>Trusted by</p>
          <img className='h-6' src={assets.accenture_logo} alt="" />
          <img className='h-6' src={assets.adobe_logo} alt="" />
          <img className='h-6' src={assets.amazon_logo} alt="" />
          <img className='h-6' src={assets.walmart_logo} alt="" />
          <img className='h-6' src={assets.microsoft_logo} alt="" />
          <img className='h-6' src={assets.samsung_logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero