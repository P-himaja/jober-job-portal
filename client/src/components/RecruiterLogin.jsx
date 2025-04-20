import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import App from '../App'
import { AppContext } from '../context/AppContext'
const RecruiterLogin = () => {
  const [state,setState] = useState('Login')
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const [image,setImage] = useState(false)
  const [isTextDataSubmitted,setIsTextDataSumbitted] = useState(false)

  const {setShowRecruiterLogin} = useContext(AppContext)
  const OnSubmitHandler = async (e) =>{
    e.preventDefault()

    if(state == 'Sign Up' && !isTextDataSubmitted){
      setIsTextDataSumbitted(true)
    }
  }

  useEffect(()=>{
    document.body.style.overflow = 'hidden'
    
    return () =>{
      document.body.style.overflow = 'unset'
    }  })



  return (
    <div className='absolute  top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
    <form  onSubmit={OnSubmitHandler} className='relative bg-white rounded-xl text-slate-500 p-10'>
    <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
    <p className='text-sm'>Welcome Back! Please sign in to continue</p>
    {state === "Sign Up" && isTextDataSubmitted ?
    <>
      <div className='flex items-center gap-4 my-10'>
        <label htmlFor="image">
          <img className='w-16 rounded-full' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          <input onChange={e => setImage(e.target.files[0])} type="file" id='image' hidden/>
        </label>
        <p>Upload Company <br />Logo</p>
      </div>


    </> :
    <>
    {state !== 'Login' && (
      <div className='border py-2 px-4 flex items-center gap-2 rounded-full mt-5 '>
        <img src={assets.person_icon} alt="" />
        <input  className='text-sm outline-none' onChange={e => setName(e.target.value)} value={name} placeholder='Company Name' required type="text" />
      </div>
    )}
      
      <div className='border py-2 px-4 flex items-center gap-2 rounded-full mt-5 '>
        <img src={assets.email_icon}  alt="" />
        <input className='text-sm outline-none' onChange={e => setEmail(e.target.value)} value = {email} type="email" placeholder ='Email Id' required/>
      </div>
      <div className='border py-2 px-4 flex items-center gap-2 rounded-full mt-5 '>
        <img src={assets.lock_icon} alt="" />
        <input className='text-sm outline-none' onChange={e => setPassword(e.target.value) } value={password}  type="password" placeholder='Password' required/>
      </div>
      
    </>}
      
    {state === "Login" && <p className='text-sm mt-2 text-blue-600 cursor-pointer '>Forgot password?</p>}
    <button type='submit' className='bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer mt-4'>
    {state === 'Login' ? 'login' : isTextDataSubmitted ? 'create account' : 'next'}
    </button>
  {
    state == 'Login' 
    ? <p className='mt-5 text-center'> Don't have an account?   <span  className='text-blue-600 cursor-pointer '  onClick={e => setState('Sign Up')}>SignUp</span></p>
    :  <p className='mt-5 text-center'>Already have an accont? <span  className='text-blue-600 cursor-pointer ' onClick={e => setState('Login')}>Login</span></p>
  }
    
   
    <img onClick ={e => setShowRecruiterLogin(false)} className="absolute top-5 right-5 cursor-pointer" src={assets.cross_icon} alt="" />
  
    </form>
    
    </div>
  )
}

export default RecruiterLogin