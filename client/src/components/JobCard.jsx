import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const JobCard = ({job}) => {
  const navigate = useNavigate()
  return (
    <div className=' p-6 border-none shadow-sm rounded'>
      <div className='flex flex-col justify-between '>
        <img className="h-8 w-6" src={assets.company_icon} alt="logo" />
        <h4 className='font-medium text-xl mt-2 '>{job.title}</h4>
        <div className='flex items-center gap-3 mt-2 text-xs '>
          <span className='bg-yellow-50 border border-yellow-200 px-4 py-1.5 rounded' >{job.location}</span>
          <span className='bg-yellow-50 border border-yellow-200 px-4 py-1.5 rounded'>{job.level}</span>
        </div>
        <p className="text-gray-500 text-sm mt-4 " dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
        <div className='mt-4 flex gap-4 text-sm'>
        <button onClick={()=>{navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='bg-blue-600 text-white px-4 py-2 rounded cursor-pointer'>Apply now</button>
        <button onClick={()=>{navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='text-gray-500 border border-gray-500 rounded px-4 py-2 cursor-pointer'>Learn more</button>
        </div>  
      </div>
    </div>
  )
}

export default JobCard