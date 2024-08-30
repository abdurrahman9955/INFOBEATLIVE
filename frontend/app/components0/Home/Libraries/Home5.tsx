'use Client'
import React from 'react'
import { useState } from 'react';
import Library1 from './Library1';
import Library2 from './Library2';
import Library3 from './Library3';

const Home5 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Library1');

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

          <button onClick={() => setSelectedRoute('Library1')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Popular </button>

          <button onClick={() => setSelectedRoute('Library2')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>Subscribed </button>

          <button onClick={() => setSelectedRoute('Library3')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Others </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1  '>
           

             {selectedRoute === 'Library1' && <Library1 />}
             {selectedRoute === 'Library2' && <Library2 />}
             {selectedRoute === 'Library3' && <Library3 />}
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home5