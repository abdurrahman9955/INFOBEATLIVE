'use Client'
import React from 'react'
import { useState } from 'react';
import Religion2 from './Religion2';
import Religion3 from './Religion3';
import Religion4 from './Religion4';
import Religion5 from './Religion5';

const Religion = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Religion2');

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

          <button onClick={() => setSelectedRoute('Religion2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Religion3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7 mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Religion4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Religion5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Religion2' && <Religion2 />}
             {selectedRoute === 'Religion3' && <Religion3 />}
             {selectedRoute === 'Religion4' && <Religion4 />}
             {selectedRoute === 'Religion5' && <Religion5 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Religion