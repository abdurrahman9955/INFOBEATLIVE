'use client'
import React from 'react'
import { useState } from 'react';
import Popular1 from './Small1/Popular1';
import Popular2 from './Small1/Popular2';
import Popular3 from './Small1/Popular3';
import Popular4 from './Small1/Popular4';

const Popular = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Popular1'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);

  return (
   
   <div className='flex justify-center  font-bold 
    bg-blue-400 border-4 border-black'>
     
       <div className='flex flex-col w-full
        bg-white mt-5  border-4 m-2
      border-black -600 h-auto  font-bold'>


     

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
           bg-blue-400'> 
          <button  onClick={() => setSelectedRoute('Popular1')}
            type='button' className='text-white 
            w-auto pl-3 pr-3 h-10  mt-2 bg-blue-950
          rounded-xl  hover:bg-slate-900'>Videos </button>

          <button   onClick={() => setSelectedRoute('Popular2')}
          type='button' className='text-white 
            w-auto pl-3 pr-3 h-10  mt-2 bg-blue-950
          rounded-xl  hover:bg-slate-900'>Shorts </button>

          <button  onClick={() => setSelectedRoute('Popular3')}
          type='button' className='text-white 
           w-auto pl-3 pr-3 h-10  mt-2 bg-blue-950
          rounded-xl  hover:bg-slate-900'>Articles </button>

         <button  onClick={() => setSelectedRoute('Popular4')}
         type='button' className='text-white 
           w-auto pl-3 pr-3 h-10  mt-2 bg-blue-950
          rounded-xl  hover:bg-slate-900'>Books </button>


         
            
          </h1>
          <div className='h-screen overflow-y-auto  p-2   '>
           

         
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