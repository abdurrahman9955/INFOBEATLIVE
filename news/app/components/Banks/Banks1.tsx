'use Client'
import React from 'react'
import Banks6 from './Banks6'
import { useState } from 'react';
import Banks7 from './Banks7';
import Banks8 from './Banks8';
import Banks9 from './Banks9';

const Banks1 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Banks6');


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

         <button onClick={() => setSelectedRoute('Banks6')}
         type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Banks7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7 mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Banks8')}
          type='button' className='text-white bg-lime-950 px-2
          w-auto h-7  mt-1 
          rounded hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Banks9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7 mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Banks6' && <Banks6 />}
             {selectedRoute === 'Banks7' && <Banks7 />}
             {selectedRoute === 'Banks8' && <Banks8 />}
             {selectedRoute === 'Banks9' && <Banks9 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Banks1