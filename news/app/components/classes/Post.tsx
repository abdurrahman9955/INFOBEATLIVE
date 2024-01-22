import Link from 'next/link'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Choose1 from './Choose/Choose1'
import Choose2 from './Choose/Choose2'

const Post = () => {
  return (
    <div className='  bg-red-500 pt-16 py-10 border-4 border-red-950' >
      <div >
        <h1 className='flex justify-center md:text-5xl text-2xl text-slate-950 font-family-bold
         font-bold'>upload & publish videos </h1>
      </div >

     
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your title here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 
       max-sm:w-4/5 h-16 mt-5  text-2xl 
        focus:outline p-2 font-bold
        bg-white text-left 
        border-4 border-slate-950' />
      </div>

       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your description'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5
        h-32 mt-5  text-2xl 
        focus:outline p-2
       bg-white text-left font-bold
        border-4 border-slate-950' />
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5
          h-auto  mt-5 font-bold
          border-4 border-slate-950  text-xl bg-white
          '
         >  <Choose1 /> </button>
      </div>

      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-auto 
          mt-5 font-bold
          border-4 border-slate-950  text-xl bg-white
          '
         >  <Choose2 /> </button>
      </div>
       
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your articles here  optional if 
       your content in not an articles and photos'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-80 mt-5  text-2xl 
        focus:outline-none focus:ring p-2 font-bold
        focus:ring-slate-950 bg-white text-left 
        border-4 border-slate-950' />
      </div>
      
     
      <div className='flex justify-center'>
      <button type='submit' className='lg:w-1/5 max-lg:w-1/3 max-md:w-2/5  h-10
       text-slate-50 bg-red-950
      hover:bg-orange-900 rounded-xl max-sm:w-3/5 mt-10 text-xl'>upload here </button>
      </div>


      <div className='flex justify-center'>
      <button type='submit' className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5  h-10
       text-slate-50 bg-slate-950
      hover:bg-indigo-950 rounded-xl max-sm:w-4/5 mt-10 text-xl '>publish to the level 1</button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5  h-10
       text-slate-50 bg-slate-950
      hover:bg-indigo-950 rounded-xl max-sm:w-4/5 mt-10 text-xl '>publish to the level 2</button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5  h-10
       text-slate-50 bg-slate-950
      hover:bg-indigo-950 rounded-xl max-sm:w-4/5 mt-10 text-xl '>publish to the level 3</button>
      </div>

      <div className='flex justify-center'>
      <button type='submit' className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5  h-10
       text-slate-50 bg-lime-950
      hover:bg-indigo-950 rounded-xl max-sm:w-4/5 mt-10 text-xl '>publish to class</button>
      </div>

     
      
      
      
     
      
    </div>
  )
}

export default Post