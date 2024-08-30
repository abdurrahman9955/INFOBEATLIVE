'use client'
import Link from "next/link"

import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import Search1 from "./Search1";



const Connect = () => {


  return (
    <div className='flex justify-center flex-col  w-full font-bold
      '>
        <div className="flex justify-center">
        <h1 className='flex justify-center mb-5  text-xl text-black font-bold 
          max-md:text-lg border-b-2 border-black bg-pink-100  w-full
        '> connect to your students here</h1></div>

         <div className='flex justify-center'>
         <div className='flex flex-col    lg:w-2/4 mb-10 max-lg:w-full m-1 font-bold 
         bg-white     md:text-sm '> 

              <div className="flex justify-center w-full ml-1 lg:ml-5  border-slate-950 ">
               <div className=" shadow-lg w-full rounded flex-initial">
                  
                   <h1 className='flex justify-center font-bold text-black 
                   text-sm'><Search1 />
                   
                   
                   </h1>
                </div>

                </div>
                
                <div className='w-full   border-b-2 border-black'></div>

         <div className='flex flex-col h-screen overflow-y-auto p-1'>
         <div className='  w-full gap-2 p-1 '>

        
         <h1>no subscribers yet</h1>
   
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Connect