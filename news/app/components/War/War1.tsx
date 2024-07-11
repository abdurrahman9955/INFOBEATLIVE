'use Client'
import React from 'react'
import { useState } from 'react';
import War6 from './War6';
import War7 from './War7';
import War8 from './War8';
import War9 from './War9';



const War1 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('War6');

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

          <button onClick={() => setSelectedRoute('War6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('War7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('War8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('War9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1  '>
           

             {selectedRoute === 'War6' && <War6 />}
             {selectedRoute === 'War7' && <War7 />}
             {selectedRoute === 'War8' && <War8 />}
             {selectedRoute === 'War9' && <War9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default War1