'use Client'
import React from 'react'
import { useState } from 'react';
import Countries2 from './Countries2';
import Countries3 from './Countries3';
import Countries4 from './Countries4';
import Countries5 from './Countries5';


const Countries = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Countries2');

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

          <button onClick={() => setSelectedRoute('Countries2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Countries3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Countries4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Countries5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Countries2' && <Countries2 />}
             {selectedRoute === 'Countries3' && <Countries3 />}
             {selectedRoute === 'Countries4' && <Countries4 />}
             {selectedRoute === 'Countries5' && <Countries5 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Countries