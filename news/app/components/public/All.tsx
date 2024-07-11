'use client'
import React from 'react'
import { useState } from 'react';
import Home1 from './Small1/Home1';
import Home2 from './Small1/Home2';
import Home3 from './Small1/Home3';

const All = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Home1');

  return (
   
   <div className='flex justify-center  font-bold 
    bg-green-400 border-1 border-black'>
     
       <div className='flex flex-col w-full
        bg-white mt-1  border-2 m-1
      border-black -600 h-auto  font-bold'>


     

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black 
           text-xs font-bold  pb-1
           bg-green-400'> 

          <button  onClick={() => setSelectedRoute('Home1')}
            type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-green-950
          rounded-sm  hover:bg-slate-900'>Channels </button>

          <button   onClick={() => setSelectedRoute('Home2')}
          type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-green-950
          rounded-sm  hover:bg-slate-900'>Libraries </button>

          <button  onClick={() => setSelectedRoute('Home3')}
          type='button' className='text-white 
           w-auto pl-3 pr-3 h-7  mt-1 bg-green-950
          rounded-sm  hover:bg-slate-900'>Studios </button>

        

         
            
          </h1>
          <div className='h-screen overflow-y-auto  p-1   '>
           

         
             {selectedRoute === 'Home1' && <Home1 />}
             {selectedRoute === 'Home2' && <Home2 />}
             {selectedRoute === 'Home3' && <Home3 />}
            
          
           </div>
    
         </div>
         </div>
        
    </div>
  )
}

export default All