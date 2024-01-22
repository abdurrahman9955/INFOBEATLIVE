'use client'
import Link from "next/link"

import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import Search from "./Search";


const Pick = () => {
 

  return (
    <div className='flex justify-center flex-col  w-full font-bold
      '>

         <div className='flex justify-center'>
         <div className='flex flex-col  pt-2  w-full max-lg:w-full font-bold 
         bg-white   max-md:w-full   md:text-xl '> 

              <div className="flex justify-center w-full ml-1 lg:ml-5  border-slate-950 ">
               <div className=" shadow-lg w-full   
                rounded flex-initial">
                  
                   <h1 className='flex justify-center font-bold text-black 
                   text-xl'><Search />
                   
                   
                   </h1>
                </div>

                </div>
                
                <div className='w-full mt-2  border-2 border-black'></div>

         <div className='flex flex-row h-screen overflow-y-auto '>
         <div className='  w-full gap-4 p-3 '>

         <h1>pick the members you want to discourse with</h1>
   
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Pick