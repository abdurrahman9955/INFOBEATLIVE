'use Client'
import React from 'react'
import { useState } from 'react';
import Rich6 from './Rich6';
import Rich7 from './Rich7';
import Rich8 from './Rich8';
import Rich9 from './Rich9';


const Rich1 = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Rich6');

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

          <button onClick={() => setSelectedRoute('Rich6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7 mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Rich7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Rich8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Rich9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Rich6' && <Rich6 />}
             {selectedRoute === 'Rich7' && <Rich7 />}
             {selectedRoute === 'Rich8' && <Rich8 />}
             {selectedRoute === 'Rich9' && <Rich9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Rich1