'use Client'
import React from 'react'
import { useState } from 'react';
import Ceo2 from './Ceo2';
import Ceo3 from './Ceo3';
import Ceo4 from './Ceo4';
import Ceo5 from './Ceo5';

const Ceo = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Ceo2');
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

          <button onClick={() => setSelectedRoute('Ceo2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Ceo3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Ceo4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Ceo5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Ceo2' && <Ceo2 />}
             {selectedRoute === 'Ceo3' && <Ceo3 />}
             {selectedRoute === 'Ceo4' && <Ceo4 />}
             {selectedRoute === 'Ceo5' && <Ceo5 />}
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Ceo