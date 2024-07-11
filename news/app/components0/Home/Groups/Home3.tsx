'use Client'
import React from 'react'
import { useState } from 'react';
import Group1 from './Group1';
import Group2 from './Group2';
import Group3 from './Group3';


const Home3 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Group1');


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

          <button onClick={() => setSelectedRoute('Group1')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Popular </button>

          <button onClick={() => setSelectedRoute('Group2')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>Joined </button>

          <button onClick={() => setSelectedRoute('Group3')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Others </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Group1' && <Group1 />}
             {selectedRoute === 'Group2' && <Group2 />}
             {selectedRoute === 'Group3' && <Group3 />}
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home3