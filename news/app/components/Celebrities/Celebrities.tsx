'use Client'
import React from 'react'
import { useState } from 'react';
import Celebrities2 from './Celebrities2';
import Celebrities3 from './Celebrities3';
import Celebrities4 from './Celebrities4';
import Celebrities5 from './Celebrities5';


const Celebrities = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Celebrities2');
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

         <button onClick={() => setSelectedRoute('Celebrities2')}
         type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Celebrities3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Celebrities4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Celebrities5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Celebrities2' && <Celebrities2 />}
             {selectedRoute === 'Celebrities3' && <Celebrities3 />}
             {selectedRoute === 'Celebrities4' && <Celebrities4 />}
             {selectedRoute === 'Celebrities5' && <Celebrities5 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Celebrities