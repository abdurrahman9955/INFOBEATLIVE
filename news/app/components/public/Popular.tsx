'use client'
import React from 'react'
import { useState } from 'react';
import Popular1 from './Small1/Popular1';
import Popular2 from './Small1/Popular2';
import Popular3 from './Small1/Popular3';
import Popular4 from './Small1/Popular4';

const Popular = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Popular1');

  return (
  
   <div className='flex justify-center  font-bold 
    bg-blue-400 border-2 border-black'>
     
       <div className='flex flex-col w-full
        bg-white mt-1  border-2 m-1
      border-black -600 h-auto  font-bold'>


     

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
          font-bold  pb-1
           bg-blue-400'> 

          <button  onClick={() => setSelectedRoute('Popular1')}
            type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-blue-950
          rounded-sm  hover:bg-slate-900'>Videos </button>

          <button   onClick={() => setSelectedRoute('Popular2')}
          type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-blue-950
          rounded-sm hover:bg-slate-900'>Shorts </button>

          <button  onClick={() => setSelectedRoute('Popular3')}
          type='button' className='text-white 
           w-auto pl-3 pr-3 h-7  mt-1 bg-blue-950
          rounded-sm  hover:bg-slate-900'>Articles </button>

         <button  onClick={() => setSelectedRoute('Popular4')}
         type='button' className='text-white 
           w-auto pl-3 pr-3 h-7  mt-1 bg-blue-950
          rounded-sm  hover:bg-slate-900'>Books </button>
            
          </h1>
          <div className='h-screen overflow-y-auto  p-1  '>
           

         
             {selectedRoute === 'Popular1' && <Popular1 />}
             {selectedRoute === 'Popular2' && <Popular2 />}
             {selectedRoute === 'Popular3' && <Popular3 />}
             {selectedRoute === 'Popular4' && <Popular4 />}
          
           </div>
    
         </div>
         </div>
        
    </div>
  )
}

export default Popular