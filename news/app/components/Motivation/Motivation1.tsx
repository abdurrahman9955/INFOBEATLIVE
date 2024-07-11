'use Client'
import React from 'react'
import { useState } from 'react';
import Motivation6 from './Motivation6';
import Motivation7 from './Motivation7';
import Motivation8 from './Motivation8';
import Motivation9 from './Motivation9';


const Motivation1 = () => {

  const [selectedRoute, setSelectedRoute] = useState<string>('Motivation6');

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

          <button onClick={() => setSelectedRoute('Motivation6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Motivation7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Motivation8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Motivation9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7 mt-1 
          rounded hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Motivation6' && <Motivation6 />}
             {selectedRoute === 'Motivation7' && <Motivation7 />}
             {selectedRoute === 'Motivation8' && <Motivation8 />}
             {selectedRoute === 'Motivation9' && <Motivation9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Motivation1