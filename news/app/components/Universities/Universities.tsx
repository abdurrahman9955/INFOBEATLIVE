'use Client'
import React from 'react'
import { useState } from 'react';
import Universities2 from './Universities2';
import Universities3 from './Universities3';
import Universities4 from './Universities4';
import Universities5 from './Universities5';



const Universities = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Universities2');

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

          <button onClick={() => setSelectedRoute('Universities2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Universities3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Universities4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Universities5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Universities2' && <Universities2 />}
             {selectedRoute === 'Universities3' && <Universities3 />}
             {selectedRoute === 'Universities4' && <Universities4 />}
             {selectedRoute === 'Universities5' && <Universities5 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Universities