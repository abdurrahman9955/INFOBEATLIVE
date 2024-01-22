'use client'
import Link from "next/link"

import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import Search from "./Search";



const Subscribers = () => {
 

  return (
    <div className='flex justify-center flex-col pt-32 w-full font-bold
    bg-red-500 '>
        <div className="flex justify-center">
        <h1 className='flex justify-center mt-5 mb-5  text-3xl text-black font-bold 
          max-md:text-2xl border-4 border-black bg-red-300 pb-2
          lg:w-2/4  max-lg:w-3/4 max-md:w-11/12
        '> you now have (0) subscribers</h1></div>
         <div className='flex justify-center'>
         <div className='flex flex-col    lg:w-2/4 mb-10 max-lg:w-3/4 font-bold 
         bg-white border-8 border-slate-950 pt-5 max-md:w-11/12   md:text-xl '> 

              <div className="flex justify-center w-full ml-1 lg:ml-5  border-slate-950 ">
               <div className=" shadow-lg w-full   
                rounded flex-initial">
                  
                   <h1 className='flex justify-center font-bold text-black 
                   text-xl'><Search />
                   
                   
                   </h1>
                </div>

                </div>
                
                <div className='w-full mt-2  border-2 border-black'></div>

         <div className='flex flex-row h-screen overflow-y-auto p-3'>
         <div className='  w-full gap-4  '>

         <h1>no subscribers yet</h1>
   
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Subscribers