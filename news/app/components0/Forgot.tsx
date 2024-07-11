'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Select8 from './Select/Select8'
import Phone6 from './countries/Phone6'

const Forgot = () => {
    const [signUpOption, setSignUpOption] = useState('email');
    const [CountryCode, setCountryCode] =
   useState<{label: string; value:string} | null>(null);

  const handleCountryCode = (option: {label: string; value: string}) =>
  {
     setCountryCode(option);
  };
    const handleOptionChange = (option:any) => {
      setSignUpOption(option);
    }

  return (
    <div className='bg-yellow-500 pt-5 min-h-screen border-2 border-purple-950 font-bold' >
      <div >
        <h1 className='flex justify-center text-xl text-slate-950 mt-5 
        '>Reset Your Password</h1>
      </div >
       
      <div className='flex justify-center '>
      <div className='flex flex-row '>
      <button onClick={() => handleOptionChange('email')}
           className='h-8 w-auto px-2 bg-white mt-5 text-sm text-black
           border-2 border-slate-950 hover:bg-yellow-200
           rounded-l-xl'> email</button>

          <button onClick={() => handleOptionChange('phone')}
          className='h-8 w-auto px-2 bg-white mt-5 text-sm text-black
          border-2 border-slate-950 hover:bg-yellow-200
          rounded-r-xl'>phone</button>
        </div>
      </div>

      <div className='flex justify-center '>

        {signUpOption === 'email' && <input type='email' className=' h-8 p-1
          mt-5 border-2 border-slate-950 lg:w-1/3 max-lg:w-2/4 max-sm:w-full
          focus:outline  max-sm:m-2  bg-white text-sm'
         placeholder='enter your email'  />}

       {signUpOption === 'phone' && 
       
       <input type='number' className=' h-8 p-1
          mt-5 border-2 border-slate-950 lg:w-1/3 max-lg:w-2/4 max-sm:w-full
          focus:outline  max-sm:m-2  bg-white text-sm'
         placeholder='enter your phone number'  />
        }
      
      </div>

      <span  className=' lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-11 mt-5  text-sm
          bg-white text-left  max-sm:m-2 hidden
         border-2 border-slate-950'>
           <h1 className='flex justify-between '>
           <input type='number' className='pt-2
             text-sm focus:outline-none  pl-2'
          placeholder='phone number'  />  
        <button className='w-auto   h-9   rounded 
         text-black'><Phone6 onSelect={handleCountryCode} /></button>
        </h1>
       </span>

      <div className='flex justify-center'>
         <input type='password' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full
          h-8 max-sm:m-2
          p-2 mt-5 border-2 border-slate-950 
          focus:outline    bg-white text-sm'
         placeholder='enter new password'  />
      </div>

      <div className='flex justify-center'>
         <input type='password' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full
          h-8 max-sm:m-2
          p-2 mt-5 border-2 border-slate-950 
          focus:outline    bg-white text-sm'
         placeholder='confirm new password'  />
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-8 mt-5  text-sm
         bg-white text-left  max-sm:m-2 
        border-2 border-slate-950'>
          <h1 className='flex justify-between '>
          <input type='number' className='h-7
            text-sm focus:outline-none  pl-2'
         placeholder='enter the OTP'  />  
       <button className='w-auto h-7 hover:bg-indigo-950
         px-5  bg-slate-950 text-white border-l-2 border-slate-950
        '>SEND </button>
       </h1>
      </span>
      </div>

      
     
      <div className='flex justify-center mt-3'>
         <input type='checkbox' className=' mr-2 h-4 w-4' />
         <p className='text-sm'>i agree with terms and condition </p>
      </div>

     
       <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 text-sm hidden
      hover:bg-blue-950 rounded-sm mt-5  '>reset password</button>
      </div>

      {signUpOption === 'email' && <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 text-sm 
      hover:bg-blue-950 rounded-sm mt-5  '>reset password</button>
      </div>}

       {signUpOption === 'phone' && 
       
       <div className='flex justify-center'>
       <button type='submit' className=' text-slate-50 bg-green-950
       lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 text-sm 
       hover:bg-blue-950 rounded-sm mt-5  '>reset password</button>
       </div>
        }

    </div>
  )
}

export default Forgot
        