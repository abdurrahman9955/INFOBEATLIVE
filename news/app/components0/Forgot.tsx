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
    <div className='bg-yellow-500 pt-40 h-screen border-4 border-purple-950 font-bold' >
      <div >
        <h1 className='flex justify-center text-3xl lg:text-4xl text-slate-950 mt-20 
        '>Reset Your Password</h1>
      </div >
       
      <div className='flex justify-center '>
      <div className='flex flex-row '>
      <button onClick={() => handleOptionChange('email')}
           className='h-10 w-auto px-2 bg-white mt-5 text-xl text-black
           border-4 border-slate-950 hover:bg-yellow-200
           rounded-l-xl'> email</button>

          <button onClick={() => handleOptionChange('phone')}
          className='h-10 w-auto px-2 bg-white mt-5 text-xl text-black
          border-4 border-slate-950 hover:bg-yellow-200
          rounded-r-xl'>phone</button>
        </div>
      </div>

      <div className='flex justify-center '>

        {signUpOption === 'email' && <input type='email' className=' h-10 p-4
          mt-5 border-4 border-slate-950 lg:w-1/3 max-lg:w-2/4 max-sm:w-full
          focus:outline  max-sm:m-2  bg-white text-xl'
         placeholder='enter your email'  />}

       {signUpOption === 'phone' && 
       
       <span  className=' lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12 mt-5  text-xl 
          bg-white text-left  max-sm:m-2
         border-4 border-slate-950'>
           <h1 className='flex justify-between '>
           <input type='number' className='pt-2
             text-xl focus:outline-none  pl-2'
          placeholder='phone number'  />  
        <button className='w-auto   h-9   rounded 
         text-black'><Phone6 onSelect={handleCountryCode} /></button>
        </h1>
       </span>
        }
      
      </div>

      <div className='flex justify-center'>
         <input type='password' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full
          h-10 max-sm:m-2
          p-4 mt-5 border-4 border-slate-950 
          focus:outline    bg-white text-xl'
         placeholder='enter new password'  />
      </div>

      <div className='flex justify-center'>
         <input type='password' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full
          h-10 max-sm:m-2
          p-4 mt-5 border-4 border-slate-950 
          focus:outline    bg-white text-xl'
         placeholder='confirm new password'  />
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-11 mt-5  text-xl 
         bg-white text-left  max-sm:m-2 
        border-4 border-slate-950'>
          <h1 className='flex justify-between '>
          <input type='number' className='h-9
            text-xl focus:outline-none  pl-2'
         placeholder='enter the OTP'  />  
       <button className='w-auto h-10 hover:bg-indigo-950
         px-5  bg-slate-950 text-white border-l-4 border-slate-950
        '>SEND </button>
       </h1>
      </span>
      </div>

      
     
      <div className='flex justify-center mt-3'>
         <input type='checkbox' className=' mr-2 h-6 w-6' />
         <p className='text-lg'>i agree with terms and condition </p>
      </div>

     
       <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-10
      hover:bg-blue-950 rounded-xl mt-2  '>reset password</button>
      </div>
     

     

    </div>
  )
}

export default Forgot
        