'use client'
import Link from "next/link"

import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import Search2 from "./Search2";



const Remove1 = () => {
 

  return (
    <div className='flex justify-center flex-col  pt-5 w-full font-bold
      '>
        
        <div className="flex justify-center">
        <h1 className='flex justify-center mt-5 mb-5  text-xl text-black font-bold 
          max-md:text-lg border-2 border-black bg-orange-100
          lg:w-2/4  max-lg:w-3/4 max-md:w-11/12
        '> remove some admins here</h1></div>
         <div className='flex justify-center'>
         <div className='flex flex-col    lg:w-2/4 mb-10 max-lg:w-3/4 font-bold 
         bg-emerald-100 border-2 border-slate-950 pt-2 max-md:w-11/12   md:text-sm '> 

              <div className="flex justify-center w-full ml-1 lg:ml-5  border-slate-950 ">
               <div className=" shadow-lg w-full   
                rounded flex-initial">
                  
                   <h1 className='flex justify-center font-bold text-black 
                   text-sm'><Search2 />
                   
                   
                   </h1>
                </div>

                </div>
                
                <div className='w-full   border-b-2 border-black'></div>

         <div className='flex flex-row h-screen overflow-y-auto p-1'>
         <div className='  w-full gap-2  '>

         <h1>no subscribers yet</h1>
   
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Remove1