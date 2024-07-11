'use Client'
import React from 'react'
import { useState } from 'react';
import Universities6 from './Universities6';
import Universities7 from './Universities7';
import Universities8 from './Universities8';
import Universities9 from './Universities9';



const Universities1 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Universities6');

  return (
  
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-lime-400'>
     
       <div className='flex flex-col  w-full m-1
        bg-white  border-2
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  
          text-xs font-bold  pb-1
          bg-lime-400'> 

          <button onClick={() => setSelectedRoute('Universities6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Universities7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Universities8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Universities9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Universities6' && <Universities6 />}
             {selectedRoute === 'Universities7' && <Universities7 />}
             {selectedRoute === 'Universities8' && <Universities8 />}
             {selectedRoute === 'Universities9' && <Universities9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Universities1