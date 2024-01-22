'use client'
import Link from "next/link"

import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import Search from "./Search";



const Connect = () => {
 

  return (
    <div className='flex justify-center flex-col  w-full font-bold
      '>
        <div className="flex justify-center">
        <h1 className='flex justify-center mb-5  text-3xl text-black font-bold 
          max-md:text-2xl border-b-4 border-black bg-green-100
         w-full
        '> connect to your members here</h1></div>
         <div className='flex justify-center'>
         <div className='flex flex-col    lg:w-2/4 mb-10 max-lg:w-full m-2 font-bold 
         bg-white     md:text-xl '> 

              <div className="flex justify-center w-full ml-1 lg:ml-5  border-slate-950 ">
               <div className=" shadow-lg w-full   
                rounded flex-initial">
                  
                   <h1 className='flex justify-center font-bold text-black 
                   text-xl'><Search />
                   
                   
                   </h1>
                </div>

                </div>
                
                <div className='w-full mt-2  border-2 border-black'></div>

         <div className='flex flex-col h-screen overflow-y-auto p-3'>
         <div className='  w-full gap-4 p-3 '>

        
         <h1>no subscribers yet</h1>
   
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Connect