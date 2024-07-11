'use Client'
import React from 'react'
import { useState } from 'react';
import Programming6 from './Programming6';
import Programming7 from './Programming7';
import Programming8 from './Programming8';
import Programming9 from './Programming9';


const Programming1 = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Programming6');

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

          <button onClick={() => setSelectedRoute('Programming6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Programming7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Programming8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Programming9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1
          rounded hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1  '>
           

             {selectedRoute === 'Programming6' && <Programming6 />}
             {selectedRoute === 'Programming7' && <Programming7 />}
             {selectedRoute === 'Programming8' && <Programming8 />}
             {selectedRoute === 'Programming9' && <Programming9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Programming1