import React from 'react'
import Link from "next/link"
import { FiMenu, FiX } from 'react-icons/fi'; 
import { useState } from "react";

const BootCampHomeText12 = () => {

  return (
 
   <div className='fixed top-32 max-sm:left-16 left-32  w-80  z-10 border-2
    border-slate-950 font-bold bg-green-950 rounded-3xl'>

       <div className='flex flex-col w-full h-96 overflow-y-auto rounded-3xl font-bold'>
       
        <div className='flex flex-col bg-green-950 text-black pt-5 w-full rounded-3xl'>

       <div className='flex justify-center text-sm max-sm:text-lg max-md:text-lg 
       font-bold text-blue-100
       '> Pricing for all bootCamp</div>
     
      
       <div className='h-auto'>

      <div className='flex justify-center '>
      <input type='number'
       placeholder='when to complete all this bootCamp'
       className=' w-full m-2 h-8   text-xs
        focus:outline p-1 
        bg-lime-00 font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <input type='text'
       placeholder='what students  will learn 1'
       className=' w-full m-2 h-8   text-xs
        focus:outline p-1 
        bg-lime-00 font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <input type='text'
       placeholder='what students  will learn 2'
       className=' w-full m-2 h-8   text-xs
        focus:outline p-1 
        bg-lime-00 font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <input type='text'
       placeholder='what students  will learn 3'
       className=' w-full m-2 h-8   text-xs
        focus:outline p-1 
        bg-lime-00 font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <input type='text'
       placeholder='what students  will learn 4'
       className=' w-full m-2 h-8   text-xs
        focus:outline p-1 
        bg-lime-00 font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <input type='text'
       placeholder='what students  will learn 5'
       className=' w-full m-2 h-8   text-xs
        focus:outline p-1 
        bg-lime-00 font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <input type='text'
       placeholder='what students  will learn 6'
       className=' w-full m-2 h-8   text-xs
        focus:outline p-1 
        bg-lime-00 font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <input type='text'
       placeholder='Price for one time pay'
       className=' w-full m-2 h-8   text-xs
        focus:outline p-1 
        bg-lime-00 font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <input type='text'
       placeholder='Price for life time pay'
       className=' w-full m-2 h-8   text-xs
        focus:outline p-1 
        bg-lime-00 font-bold
        border border-black' />
      </div>

     
       </div>
       
      <div className='flex justify-center'>
       <button type='submit' className=' rounded-full
        bg-slate-950 lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5
         text-xs text-white  h-7 mt-5 
        hover:bg-slate-900 mb-5'>Save</button>

      </div>
    </div>     
       
      </div>
    </div>
 
 
  )
}

export default BootCampHomeText12