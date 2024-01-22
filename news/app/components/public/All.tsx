'use client'
import React from 'react'
import { useState } from 'react';
import Home1 from './Small1/Home1';
import Home2 from './Small1/Home2';
import Home3 from './Small1/Home3';

const All = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Home1'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);

  return (
   
   <div className='flex justify-center  font-bold 
    bg-green-400 border-4 border-black'>
     
       <div className='flex flex-col w-full
        bg-white mt-5  border-4 m-2
      border-black -600 h-auto  font-bold'>


     

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
           bg-green-400'> 

          <button  onClick={() => setSelectedRoute('Home1')}
            type='button' className='text-white 
            w-auto pl-3 pr-3 h-10  mt-2 bg-green-950
          rounded-xl  hover:bg-slate-900'>Channels </button>

          <button   onClick={() => setSelectedRoute('Home2')}
          type='button' className='text-white 
            w-auto pl-3 pr-3 h-10  mt-2 bg-green-950
          rounded-xl  hover:bg-slate-900'>Libraries </button>

          <button  onClick={() => setSelectedRoute('Home3')}
          type='button' className='text-white 
           w-auto pl-3 pr-3 h-10  mt-2 bg-green-950
          rounded-xl  hover:bg-slate-900'>Studios </button>

        

         
            
          </h1>
          <div className='h-screen overflow-y-auto  p-2   '>
           

         
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