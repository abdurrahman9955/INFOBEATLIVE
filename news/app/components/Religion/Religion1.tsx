'use Client'
import React from 'react'
import { useState } from 'react';
import Religion6 from './Religion6';
import Religion7 from './Religion7';
import Religion8 from './Religion8';
import Religion9 from './Religion9';

const Religion1 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Religion6');

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

          <button onClick={() => setSelectedRoute('Religion6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Religion7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Religion8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7 mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Religion9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Religion6' && <Religion6 />}
             {selectedRoute === 'Religion7' && <Religion7 />}
             {selectedRoute === 'Religion8' && <Religion8 />}
             {selectedRoute === 'Religion9' && <Religion9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Religion1