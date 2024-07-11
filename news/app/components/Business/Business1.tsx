'use Client'
import React from 'react'
import { useState } from 'react';
import Business6 from './Business6';
import Business7 from './Business7';
import Business8 from './Business8';
import Business9 from './Business9';

const Business1 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Business6');
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

          <button onClick={() => setSelectedRoute('Business6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Business7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Business8')}
          type='button' className='text-white bg-lime-950 px-2
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Business9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7 mt-1 
          rounded hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1  '>
           

           
             {selectedRoute === 'Business6' && <Business6 />}
             {selectedRoute === 'Business7' && <Business7 />}
             {selectedRoute === 'Business8' && <Business8 />}
             {selectedRoute === 'Business9' && <Business9 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Business1