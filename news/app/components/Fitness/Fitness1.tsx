'use Client'
import React from 'react'
import { useState } from 'react';
import Fitness6 from './Fitness6';
import Fitness7 from './Fitness7';
import Fitness8 from './Fitness8';
import Fitness9 from './Fitness9';

const Fitness1 = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Fitness6');

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

          <button onClick={() => setSelectedRoute('Fitness6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Fitness7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Fitness8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Fitness9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Fitness6' && <Fitness6 />}
             {selectedRoute === 'Fitness7' && <Fitness7 />}
             {selectedRoute === 'Fitness8' && <Fitness8 />}
             {selectedRoute === 'Fitness9' && <Fitness9 />}



           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Fitness1