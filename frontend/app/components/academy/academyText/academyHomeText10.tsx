import React from 'react'
import Link from "next/link"
import { FiMenu, FiX } from 'react-icons/fi'; 
import { useState } from "react";

const AcademyHomeText10 = () => {

  return (
  
   <div className='fixed top-32 max-sm:left-16 left-32 px-3 w-80 shadow-md z-10  font-bold 
    '>

       <div className='flex flex-col w-ful  rounded-3xl h-auto  font-bold'>

         <div className='   w-full  h-auto'>
       
          <div className='h-auto overflow-y-auto   '>
         
        <div className='flex flex-col bg-cyan-950 text-black pt-5 
        border-2 border-slate-950 rounded-3xl '>

       <div className='flex justify-center text-sm max-sm:text-lg max-md:text-lg 
       font-bold text-white
       '> Your Contact Details</div>
      
      
       <div>

      <div className='flex justify-center '>
      <input type='text'
       placeholder='your email address '
       className=' w-full m-2 h-8   text-sm
        focus:outline p-1 
        bg-lime-00 font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <input type='text'
       placeholder='your phone number with code'
       className=' w-full m-2 h-8   text-sm
        focus:outline p-1 
        bg-lime-00 font-bold
        border border-black' />
      </div>

     
     
       </div>
       
      <div className='flex justify-center'>
       <button type='submit' className=' rounded-full
        bg-slate-950 lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5
         text-xs text-white  h-7 mt-5 
        hover:bg-slate-800 mb-5'>Save</button>

      </div>
    </div>     
       
      </div>
    </div>
   </div> 
  </div>
  )
}

export default AcademyHomeText10