'use Client'
import React from 'react'
import Books6 from './Books6'
import { useState } from 'react';
import Books7 from './Books7';
import Books8 from './Books8';
import Books9 from './Books9';

const Books1 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Books6');

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

         <button onClick={() => setSelectedRoute('Books6')}
         type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Books7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Books8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Books9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Books6' && <Books6 />}
             {selectedRoute === 'Books7' && <Books7 />}
             {selectedRoute === 'Books8' && <Books8 />}
             {selectedRoute === 'Books9' && <Books9 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Books1