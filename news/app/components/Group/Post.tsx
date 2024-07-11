'use client'
import Link from 'next/link'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Choose1 from './CHoose/Choose1'
import Choose2 from './CHoose/Choose2'

const Post = () => {
  return (
    <div className='  bg-amber-500 pt-5 py-5 border-2 border-red-950' >
      <div >
        <h1 className='flex justify-center md:text-xl text-lg text-slate-950 
        font-family-bold  font-bold'>upload & publish videos </h1>
      </div >

      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your title here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 
       max-sm:w-full m-2 h-8 mt-5  text-sm 
        focus:outline p-1 font-bold
        bg-white text-left 
        border-2 border-slate-950' />
      </div>
       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your description'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full  m-2
        h-32 mt-5  text-sm
        focus:outline p-1
       bg-white text-left font-bold
        border-2 border-slate-950' />
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2
          h-auto  mt-5 font-bold
          border-2 border-slate-950  text-sm bg-white
          '
         >  <Choose1 /> </button>
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-auto 
          mt-5 font-bold
          border-2 border-slate-950  text-sm bg-white
          '
         >  <Choose2 /> </button>
      </div>
       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your articles here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-80 mt-5  text-sm
        focus:outline-none focus:ring p-2 font-bold
        focus:ring-slate-950 bg-white text-left 
        border-2 border-slate-950' />
      </div>
      
     
      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-violet-950
      hover:bg-pink-950 rounded-sm max-sm:w-3/5 mt-5 text-sm'>upload your video </button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-slate-950
      hover:bg-purple-950 rounded-sm max-sm:w-3/5 mt-5 text-sm'>upload a photos </button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-lime-950
      hover:bg-slate-900 rounded-sm max-sm:w-3/5 mt-5 text-sm'>upload your shorts </button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-emerald-950
      hover:bg-slate-900 rounded-sm max-sm:w-3/5 mt-5 text-sm'>upload your Audios </button>
      </div>


      <div className='flex justify-center'>
      <button type='submit' className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5  h-7
       text-slate-50 bg-red-950
      hover:bg-indigo-950 rounded-sm max-sm:w-4/5 mt-5 mb-10 text-sm '>publish to the group</button>
      </div>

     
      
      
      
     
      
    </div>
  )
}

export default Post