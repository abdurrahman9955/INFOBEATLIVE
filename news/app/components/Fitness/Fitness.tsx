'use Client'
import React from 'react'
import { useState } from 'react';
import Fitness2 from './Fitness2';
import Fitness3 from './Fitness3';
import Fitness4 from './Fitness4';
import Fitness5 from './Fitness5';

const Fitness = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Fitness2');

  return (
  
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-lime-400'>
     
       <div className='flex flex-col  w-full m-1  bg-white  border-2
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
          font-bold  pb-1
          bg-lime-400'> 

          <button onClick={() => setSelectedRoute('Fitness2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7 mt-1 text-xs 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Fitness3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 text-xs 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Fitness4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1  text-xs 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Fitness5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 text-xs 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Fitness2' && <Fitness2 />}
             {selectedRoute === 'Fitness3' && <Fitness3 />}
             {selectedRoute === 'Fitness4' && <Fitness4 />}
             {selectedRoute === 'Fitness5' && <Fitness5 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Fitness