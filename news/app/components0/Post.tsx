'use client'
import Link from 'next/link'
import React from 'react'
import Select5 from './Select/Select5'
import Select6 from './Select/Select6'


const Post = () => {
  return (
    <div className=' min-h-screen bg-lime-500  py-5 border-2 border-red-950' >
      <div >
        <h1 className='flex justify-center md:text-xl text-lg text-slate-950 font-family-bold
         font-bold mb-'>upload or write your post here </h1>
      </div >


      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your title here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-5/6
       max-sm:w-full h-10 mt-5  text-lg m-2
        focus:outline p-1 font-bold
        bg-white text-left 
        border-2 border-slate-950' />
      </div>

       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your description'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-5/6 max-sm:w-full
        h-28 mt-5  text-sm m-2
        focus:outline p-1
       bg-white text-left font-bold
        border-2 border-slate-950' />
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-5/6 max-sm:w-full
          h-auto  mt-5 mx-2
          border-2 border-slate-950  text-sm bg-white
          '
         >  <Select5 /> </button>
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-5/6 max-sm:w-full h-auto 
          mt-5 mx-2
          border-2 border-slate-950  text-sm bg-white
          '
         >  <Select6 /> </button>
      </div>
       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your post here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-5/6 max-sm:w-full h-64 mt-5  text-sm 
        focus:outline-none focus:ring p-1 font-bold mx-2
        focus:ring-slate-950 bg-white text-left 
        border-2 border-slate-950' />
      </div>
      
     
      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-purple-950
      hover:bg-orange-950 rounded max-sm:w-3/5 mt-10 text-sm'>upload your video </button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-slate-950
      hover:bg-green-950 rounded max-sm:w-3/5 mt-6 text-sm'>upload a photos </button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-2/5 max-lg:w-2/3 max-md:w-2/5  h-7
       text-slate-50 bg-black mb-10 
      hover:bg-red-950 rounded max-sm:w-4/5 mt-6 text-sm '>publish your post</button>
      </div>

     
      
      
      
     
      
    </div>
  )
}

export default Post