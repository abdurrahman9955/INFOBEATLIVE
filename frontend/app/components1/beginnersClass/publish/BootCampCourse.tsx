'use client'
import Link from 'next/link'
import React from 'react'
import Videos2 from '@/app/components/upload/Small/Videos2'
import Videos1 from '@/app/components/upload/Small/Videos1'

const BootCampCourse1 = () => {
  return (
    <div className='  bg-lime-500  py-5 border-2 border-purple-950' >
      <div >
        <h1 className='flex justify-center md:text-2xl text-xl text-slate-950 
        font-family-bold
         '>upload & publish your course </h1>
      </div >
   
      <div className='flex justify-center mt-10'>
      <textarea
       id="news"
       name="message"
       placeholder='write your title here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-10 mt-1  text-xl 
        focus:outline-none focus:ring p-1 rounded-lg
        focus:ring-slate-950 bg-white text-left 
        border-2 border-slate-950' />
      </div>

      
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your tags'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-32 mt-5  text-sm 
        focus:outline-none focus:ring p-1 rounded-xl
        focus:ring-slate-950 bg-white text-left 
        border-2 border-slate-950' />
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2  h-auto  mt-5
          border-2 border-slate-950  text-sm bg-white max-sm:m-2 
          '
         >  <Videos1 /> </button>
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2  h-auto  mt-5
          border-2 border-slate-950  text-sm bg-white max-sm:m-2 
          '
         >  <Videos2 /> </button>
      </div>
       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your description here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-64 mt-5  text-sm 
        focus:outline-none focus:ring p-1 rounded-xl
        focus:ring-slate-950 bg-white text-left 
        border-2 border-slate-950' />
      </div>
     
      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-lime-950
      hover:bg-slate-900 rounded max-sm:w-3/5 mt-10 text-sm'>upload your video </button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-orange-950
      hover:bg-purple-950 rounded max-sm:w-3/5 mt-6 text-sm'>upload thumbnail </button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5  h-7
       text-slate-50 bg-black mb-10
      hover:bg-indigo-950 rounded max-sm:w-4/5 mt-6 text-sm '>publish to the public</button>
      </div>
     
      
    </div>
  )
}

export default BootCampCourse1