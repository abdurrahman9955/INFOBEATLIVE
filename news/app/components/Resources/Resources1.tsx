'use Client'
import React from 'react'
import { useState } from 'react';
import Resources6 from './Resources6';
import Resources7 from './Resources7';
import Resources8 from './Resources8';
import Resources9 from './Resources9';

const Resources1 = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Resources6');

  return (
   
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-lime-400'>
    
       <div className='flex flex-col  w-full m-1
        bg-white  border-2
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black
            text-xs font-bold  pb-1
          bg-lime-400'> 

          <button onClick={() => setSelectedRoute('Resources6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Resources7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Resources8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Resources9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Resources6' && <Resources6 />}
             {selectedRoute === 'Resources7' && <Resources7 />}
             {selectedRoute === 'Resources8' && <Resources8 />}
             {selectedRoute === 'Resources9' && <Resources9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Resources1