'use Client'
import React from 'react'
import { useState } from 'react';
import Politics6 from './Politics6';
import Politics7 from './Politics7';
import Politics8 from './Politics8';
import Politics9 from './Politics9';

const Politics1 = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Politics6');

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

          <button onClick={() => setSelectedRoute('Politics6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Politics7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Politics8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Politics9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Politics6' && <Politics6 />}
             {selectedRoute === 'Politics7' && <Politics7 />}
             {selectedRoute === 'Politics8' && <Politics8 />}
             {selectedRoute === 'Politics9' && <Politics9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Politics1