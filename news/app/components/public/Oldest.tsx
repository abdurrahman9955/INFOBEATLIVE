'use client'
import React from 'react'
import { useState } from 'react';
import Oldest1 from './Small1/Oldest1';
import Oldest2 from './Small1/Oldest2';
import Oldest3 from './Small1/Oldest3';
import Oldest4 from './Small1/Oldest4';


const Oldest = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Oldest1'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);

  return (
   
   <div className='flex justify-center  font-bold 
    bg-red-400 border-4 border-black'>
     
       <div className='flex flex-col w-full
        bg-white mt-5  border-4 m-2
      border-black -600 h-auto  font-bold'>


     

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
           bg-red-400'> 
          <button  onClick={() => setSelectedRoute('Oldest1')}
            type='button' className='text-white 
            w-auto pl-3 pr-3 h-10  mt-2 bg-red-950
          rounded-xl  hover:bg-slate-900'>Videos </button>

          <button   onClick={() => setSelectedRoute('Oldest2')}
          type='button' className='text-white 
            w-auto pl-3 pr-3 h-10  mt-2 bg-red-950
          rounded-xl  hover:bg-slate-900'>Shorts </button>

          <button  onClick={() => setSelectedRoute('Oldest3')}
          type='button' className='text-white 
           w-auto pl-3 pr-3 h-10  mt-2 bg-red-950
          rounded-xl  hover:bg-slate-900'>Articles </button>

         <button  onClick={() => setSelectedRoute('Oldest4')}
         type='button' className='text-white 
           w-auto pl-3 pr-3 h-10  mt-2 bg-red-950
          rounded-xl  hover:bg-slate-900'>Books </button>


         
            
          </h1>
          <div className='h-screen overflow-y-auto  p-2   '>
           

         
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

export default Oldest