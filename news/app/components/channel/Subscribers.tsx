'use client'
import Link from "next/link"

import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import Search1 from "./Search1";



const Subscribers = () => {
 

  return (
    <div className='flex justify-center flex-col sm:pt-5 w-full font-bold
     bg-yellow-500 '>
        <div className="flex justify-center">
        <h1 className='flex justify-center sm:mt-5 sm:mb-5  text-xl text-black font-bold 
          max-md:text-lg border-2 border-black bg-yellow-300 pb-2
          lg:w-2/4  max-lg:w-3/4 max-md:w-full
        '> you now have (0) subscribers</h1></div>
         <div className='flex justify-center'>
         <div className='flex flex-col    lg:w-2/4 sm:mb-10 max-lg:w-3/4 font-bold 
         bg-white  border-4 border-slate-950 pt-2 max-md:w-full   md:text-xl '> 

              <div className="flex justify-center w-full ml-1 lg:ml-5  border-slate-950 ">
               <div className=" shadow-lg w-full    rounded flex-initial">
                  
                   <h1 className='flex justify-center font-bold text-black 
                   text-sm'><Search1 />
                   
                   
                   </h1>
                </div>

                </div>
                
                <div className='w-full mt-2  border-2 border-black'></div>

         <div className='flex flex-row h-screen overflow-y-auto p-3'>
         <div className='  w-full gap-2  '>

         <h1>no subscribers yet</h1>
   
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Subscribers