'use Client'
import React from 'react'
import { useState } from 'react';
import Resources2 from './Resources2';
import Resources3 from './Resources3';
import Resources4 from './Resources4';
import Resources5 from './Resources5';

const Resources = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Resources2');

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

          <button onClick={() => setSelectedRoute('Resources2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Resources3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Resources4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Resources5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Resources2' && <Resources2 />}
             {selectedRoute === 'Resources3' && <Resources3 />}
             {selectedRoute === 'Resources4' && <Resources4 />}
             {selectedRoute === 'Resources5' && <Resources5 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Resources