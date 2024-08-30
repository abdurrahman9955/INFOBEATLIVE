'use client'
import React from 'react'
import { useState } from 'react';
import Oldest1 from './Small1/Oldest1';
import Oldest2 from './Small1/Oldest2';
import Oldest3 from './Small1/Oldest3';
import Oldest4 from './Small1/Oldest4';


const Instructors = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Oldest1');

  return (
  
   <div className='flex justify-center  font-bold 
    bg-lime-500 border-2 border-black'>
     
       <div className='flex flex-col w-full
        bg-white mt-1  border-2 m-1
      border-black -600 h-auto  font-bold'>

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
          font-bold  pb-1
           bg-lime-500'> 
          <button  onClick={() => setSelectedRoute('Oldest1')}
            type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm  hover:bg-slate-900'>Videos </button>

          <button   onClick={() => setSelectedRoute('Oldest2')}
          type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm  hover:bg-slate-900'>Shorts </button>

          <button  onClick={() => setSelectedRoute('Oldest3')}
          type='button' className='text-white 
           w-auto pl-3 pr-3 h-7 mt-1 bg-slate-950
          rounded-sm  hover:bg-slate-900'>Articles </button>

         <button  onClick={() => setSelectedRoute('Oldest4')}
         type='button' className='text-white 
           w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm  hover:bg-slate-900'>Books </button>


         
            
          </h1>
          <div className='h-screen overflow-y-auto  p-1   '>
           

         
             {selectedRoute === 'Oldest1' && <Oldest1 />}
             {selectedRoute === 'Oldest2' && <Oldest2 />}
             {selectedRoute === 'Oldest3' && <Oldest3 />}
             {selectedRoute === 'Oldest4' && <Oldest4 />}
          
           </div>
    
         </div>
         </div>
        
    </div>
  )
}

export default Instructors