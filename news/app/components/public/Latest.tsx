'use client'
import React from 'react'
import { useState } from 'react';
import Latest1 from './Small1/Latest1';
import Latest2 from './Small1/Latest2';
import Latest3 from './Small1/Latest3';
import Latest4 from './Small1/Latest4';

const Latest = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Latest1'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);

  return (
   
   <div className='flex justify-center  font-bold 
    bg-amber-400 border-4 border-black'>
     
       <div className='flex flex-col w-full
        bg-white mt-5  border-4 m-2
      border-black -600 h-auto  font-bold'>


     

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
           bg-amber-400'> 
          <button  onClick={() => setSelectedRoute('Latest1')}
            type='button' className='text-white 
            w-auto pl-3 pr-3 h-10  mt-2 bg-amber-950
          rounded-xl  hover:bg-slate-900'>Videos </button>

          <button   onClick={() => setSelectedRoute('Latest2')}
          type='button' className='text-white 
            w-auto pl-3 pr-3 h-10  mt-2 bg-amber-950
          rounded-xl  hover:bg-slate-900'>Shorts </button>

          <button  onClick={() => setSelectedRoute('Latest3')}
          type='button' className='text-white 
           w-auto pl-3 pr-3 h-10  mt-2 bg-amber-950
          rounded-xl  hover:bg-slate-900'>Articles </button>

         <button  onClick={() => setSelectedRoute('Latest4')}
         type='button' className='text-white 
           w-auto pl-3 pr-3 h-10  mt-2 bg-amber-950
          rounded-xl  hover:bg-slate-900'>Books </button>


         
            
          </h1>
          <div className='h-screen overflow-y-auto  p-2   '>
           

         
             {selectedRoute === 'Latest1' && <Latest1 />}
             {selectedRoute === 'Latest2' && <Latest2 />}
             {selectedRoute === 'Latest3' && <Latest3 />}
             {selectedRoute === 'Latest4' && <Latest4 />}
          
           </div>
    
         </div>
         </div>
        
    </div>
  )
}

export default Latest