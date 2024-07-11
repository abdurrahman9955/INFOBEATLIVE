'use client'
import Link from 'next/link'
import React from 'react'
import Books1 from './Small/Books1'
import Books2 from './Small/Books2'

const books = () => {
  return (
    <div className='  bg-fuchsia-500  py-5 border-2 border-purple-950' >
      <div >
        <h1 className='flex justify-center md:text-xl text-lg text-slate-950 font-bold
         '>upload & publish books </h1>
      </div >

      <div className='flex justify-center'>
      <span 
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-auto mt-5 mb-5 text-sm 
        focus:outline-none focus:ring p-1 bg-fuchsia-500
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
      <input
       type='text'
       name="name"
       placeholder='write  the name of your book'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-10 mt-1  text-xl 
          p-1
         bg-white text-left 
        border-2 border-slate-950' />
      </div>

      <div className='flex justify-center'>
      <input
       type='text'
       name="name"
       placeholder='write the name of the author'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-10 mt-5  text-sm
         p-1
         bg-white text-left 
        border-2 border-slate-950' />
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-auto  mt-5
          border-2 border-slate-950  text-sm bg-white max-sm:m-2
          '
         >  <Books1 /> </button>
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2  h-auto  mt-5
          border-2 border-slate-950  text-sm bg-white max-sm:m-2
          '
         >  <Books2 /> </button>
      </div>


      <div className='flex justify-center '>
      <span  className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-auto mt-5  text-sm 
        focus:outline-none focus:ring p-1
        focus:ring-slate-950 bg-white text-left pb-1
        border-2 border-slate-950'>
          <h1 className='flex justify-between '>
             generate a copyright id
          
       <button className=' w-2/6 h-6 bg-lime-950  rounded 
        text-white'>generate</button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center'>
      <span  className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-auto mt-5  text-sm 
        focus:outline-none focus:ring p-1
        focus:ring-slate-950 bg-fuchsia-500 text-left 
        border-2 border-slate-950 text-black font-bold' >
          <h1>Note: your copy write id is your content secret no one can upload
            it or download until you give him this copy write id, so if you share your 
            secret id to every one make sure he can download and reupload it but he cannot generate 
            a copy write id, only copy write id can generate for original content, 
            if you need your content to be available to every body and to be downloadable you can skip
            generating, we create that in order to prevent reuploading your content or your product,
            but we create this platform to be available for everybody.

          </h1>
       </span>
      </div>
       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write the summary about your book and how your book can help its readers'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-64 mt-5  text-sm 
         p-1
       bg-white text-left 
        border-2 border-slate-950' />
      </div>
     
      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-green-950
      hover:bg-slate-900 rounded max-sm:w-3/5 mt-10 text-sm'>upload your book </button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-7
       text-slate-50 bg-emerald-950
      hover:bg-slate-700 rounded max-sm:w-3/5 mt-6 text-sm'>validate your book </button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5  h-7
       text-slate-50 bg-red-950
      hover:bg-slate-950 rounded max-sm:w-4/5 mt-6 text-sm '>publish to the private</button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5  h-7
       text-slate-50 bg-black
      hover:bg-indigo-800 rounded max-sm:w-4/5 mt-6 text-sm '>publish to the public</button>
      </div>

     
      
      
     
      
    </div>
  )
}

export default books