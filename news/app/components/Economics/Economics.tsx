'use Client'
import React from 'react'
import { useState } from 'react';
import Economics2 from './Economics2';
import Economics3 from './Economics3';
import Economics4 from './Economics4';
import Economics5 from './Economics5';

const Economics = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Economics2');

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

          <button onClick={() => setSelectedRoute('Economics2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Economics3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Economics4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Economics5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Economics2' && <Economics2 />}
             {selectedRoute === 'Economics3' && <Economics3 />}
             {selectedRoute === 'Economics4' && <Economics4 />}
             {selectedRoute === 'Economics5' && <Economics5 />}
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Economics