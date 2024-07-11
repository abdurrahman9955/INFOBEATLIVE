'use Client'
import React from 'react'
import { useState } from 'react';
import Money6 from './Money6';
import Money7 from './Money7';
import Money8 from './Money8';
import Money9 from './Money9';


const Money1 = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Money6');
 
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

          <button onClick={() => setSelectedRoute('Money6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7 mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Money7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Money8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Money9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Money6' && <Money6 />}
             {selectedRoute === 'Money7' && <Money7 />}
             {selectedRoute === 'Money8' && <Money8 />}
             {selectedRoute === 'Money9' && <Money9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Money1