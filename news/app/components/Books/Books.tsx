'use Client'
import React from 'react'
import Books2 from './Books2'
import { useState } from 'react';
import Books3 from './Books3';
import Books4 from './Books4';
import Books5 from './Books5';

const Books = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Books2');

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

        <button onClick={() => setSelectedRoute('Books2')}
        type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Books3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Books4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Books5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Books2' && <Books2 />}
             {selectedRoute === 'Books3' && <Books3 />}
             {selectedRoute === 'Books4' && <Books4 />}
             {selectedRoute === 'Books5' && <Books5 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Books