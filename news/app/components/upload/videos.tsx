'use client'
import Link from 'next/link'
import React from 'react'
import Videos1 from './Small/Videos1'
import Videos2 from './Small/Videos2'

const videos = () => {
  return (
    <div className='  bg-amber-500  py-5 border-2 border-purple-950' >
      <div >
        <h1 className='flex justify-center md:text-2xl text-xl text-slate-950 
        font-family-bold
         '>upload & publish videos </h1>
      </div >

      
      <div className='flex justify-center'>
      <span 
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-auto mt-5 mb-5  
       text-sm focus:outline-none focus:ring p-2 bg-amber-500
        focus:ring-slate-950 text-left 
        border-2 border-slate-950'>
          <h1 className='font-bold text-black'>
            Note: how to upload your content, when you fill all the requirements below
            to publish it, if you choose private it will redirect to the private section 
            no one can access it without your permission, if you publish it to the public 
            every body can access it ,  so read the form care fully and then publish to the place 
            you desire. but if you publish it to the private you can republish it to the public
            at any time your desire,
             you can visit <Link href={{pathname:'/privacy'}} className='text-blue-800'>
              privacy and policy </Link> to see more information about this app.
             </h1>
       </span>
      </div>
     
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your title here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-10 mt-1  text-xl 
        focus:outline-none focus:ring p-1
        focus:ring-slate-950 bg-white text-left 
        border-2 border-slate-950' />
      </div>

       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your tags'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-32 mt-5  text-sm 
        focus:outline-none focus:ring p-1
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

      <div className='flex justify-center '>
      <span  className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-auto mt-5  text-sm 
        focus:outline-none focus:ring p-1
        focus:ring-slate-950 bg-white text-left pb-1
        border-2 border-slate-950'>
          <h1 className='flex justify-between font-bold'>
             generate a copyright id
          
       <button className=' w-2/6 h-6 bg-lime-950  rounded
        text-white'>generate</button>
       </h1>
      </span>
      </div>


      <div className='flex justify-center'>
      <span  className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-auto mt-5  text-sm 
        focus:outline-none focus:ring p-1
        focus:ring-slate-950 bg-amber-500 text-left 
        border-2 border-slate-950 text-black font-bold' >
           <h1>Note: your copy write id is your content secret no one can reupload
            it  once you generate a copy write id for your content, 
             only copy write id can generate for original content, 
            if you need your content to be available to every body without any secret
             you can skip
            generating, that is why we are validating users before uploading,
             we put that copyWrite id  in order to prevent reuploading your 
            content or your product,
            but we create this platform to be available for everybody.

          </h1>
       </span>
      </div>
       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your description here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-64 mt-5  text-sm 
        focus:outline-none focus:ring p-1
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
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-lime-950
      hover:bg-slate-900 rounded max-sm:w-3/5 mt-6 text-sm'>validate your video </button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5  h-7
       text-slate-50 bg-slate-950
      hover:bg-cyan-950 rounded max-sm:w-4/5 mt-6 text-sm '>publish to the private</button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5  h-7
       text-slate-50 bg-black
      hover:bg-indigo-950 rounded max-sm:w-4/5 mt-6 text-sm '>publish to the public</button>
      </div>
     
      
    </div>
  )
}

export default videos