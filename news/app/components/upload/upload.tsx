'use client'
import Link from 'next/link'
import React from 'react'
import Upload1 from './Small/Upload1'
import Upload2 from './Small/Uplaod2'

const upload = () => {
  return (
    <div className='  bg-red-500 pt-40 py-10 border-4 border-purple-950' >
      <div >
        <h1 className='flex justify-center md:text-5xl text-2xl text-slate-950 font-family-bold
         '>upload & publish articles </h1>
      </div >

      <div className='flex justify-center'>
      <span 
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-auto mt-10 mb-20  text-xl 
        focus:outline-none focus:ring p-2 bg-red-500
        focus:ring-slate-950 text-left 
        border-4 border-black'>
          <h1 className='font-bold text-black'>
            Note: upload articles, means posting a things relate to writing, blog, or news, 
            with photos or not, like any blog website, you can post your blog or news here
             if your articles need videos you can upload it too, but video will be available
             both in your article and your videos section, you must validate your videos 
             to ensure us that your video is not belong to any one in this platform, if your
             videos belong to someone, or you only need to mention it in your blog you
              can put its link,
             you can publish your post to the private, if you don not need anybody to access it
             without your permission, but you can make it available to the public later if you wish,
             thanks for your participating, 
             you can visit <Link href={{pathname:'/privacy'}} className='text-blue-900'>
              privacy and policy </Link> to see more information about this app.</h1>
            
         
       </span>
      </div>
     
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your title here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-16 mt-5  text-3xl 
         p-2
         bg-white 
        border-4 border-slate-950' />
      </div>

       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your description'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-32 mt-5  text-2xl 
       p-2
       bg-white  
        border-4 border-slate-950' />
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5  h-auto  mt-5
          border-4 border-slate-950  text-xl bg-white max-sm:m-2
          '
         >  <Upload1 /> </button>
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5  h-auto  mt-5
          border-4 border-slate-950  text-xl bg-white max-sm:m-2
          '
         >  <Upload2 /> </button>
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-auto mt-5  text-xl 
        focus:outline-none focus:ring p-2
        focus:ring-slate-950 bg-white text-left pb-2
        border-4 border-slate-950'>
          <h1 className='flex justify-between '>
             generate a copyright id
          
       <button className=' w-2/6 h-9 bg-lime-950 mb-2 rounded-xl 
        text-white'>generate</button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-auto mt-5 
       text-lg
         p-2
        bg-red-500 text-left pb-2
        border-4 border-slate-950'>
          <h1 className='flex justify-between font-bold text-2xl'>
             note: you can skip that and  if don not have video 
              in your articles but if  you have videos in your articles
              please generate a copy write id.
          
       </h1>
      </span>
      </div>
       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your articles here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-80 mt-5  text-2xl 
         p-2
         bg-white  
        border-4 border-slate-950' />
      </div>
     
     
     
      

      
      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-10
       text-slate-50 bg-purple-950
      hover:bg-slate-900 rounded-xl max-sm:w-3/5 mt-10 text-xl'>upload photos or videos </button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-10
       text-slate-50 bg-lime-950
      hover:bg-slate-700 rounded-xl max-sm:w-3/5 mt-10 text-xl'>validate your post </button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5  h-10
       text-slate-50 bg-yellow-950
      hover:bg-slate-700 rounded-xl max-sm:w-4/5 mt-10 text-xl '>publish to the private</button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5  h-10
       text-slate-50 bg-slate-950
      hover:bg-indigo-800 rounded-xl max-sm:w-4/5 mt-10 text-xl '>publish to the public</button>
      </div>

      
      
     
      
    </div>
  )
}

export default upload