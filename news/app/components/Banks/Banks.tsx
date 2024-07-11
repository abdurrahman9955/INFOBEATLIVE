'use Client'
import React from 'react'
import Banks2 from './Banks2'
import { useState } from 'react';
import Banks3 from './Banks3';
import Banks4 from './Banks4';
import Banks5 from './Banks5';

const Banks = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Banks2');


  return (
   
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-lime-400'>
     
       <div className='flex flex-col  w-full m-1
        bg-white  border-2
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
          font-bold  pb-1
          bg-lime-400'> 

          <button onClick={() => setSelectedRoute('Banks2')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Banks3')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Banks4')}
           type='button' className='text-white bg-lime-950 px-2
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Banks5')}
           type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1  '>
           

             {selectedRoute === 'Banks2' && <Banks2 />}
             {selectedRoute === 'Banks3' && <Banks3 />}
             {selectedRoute === 'Banks4' && <Banks4 />}
             {selectedRoute === 'Banks5' && <Banks5 />}
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Banks