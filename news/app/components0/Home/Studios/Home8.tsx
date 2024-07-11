'use Client'
import React from 'react'
import { useState } from 'react';
import Studios1 from './Studios1';
import Studios2 from './Studios2';
import Studios3 from './Studios3';


const Home8 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Studios1');


  return (
   
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-lime-400'>
     
       <div className='flex flex-col  w-full m-1
        bg-white  border-2
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
          font-bold  pb-1 bg-lime-400'> 

          <button onClick={() => setSelectedRoute('Studios1')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>Popular </button>

          <button onClick={() => setSelectedRoute('Studios2')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Subscribed </button>

          <button onClick={() => setSelectedRoute('Studios3')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Others </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Studios1' && <Studios1 />}
             {selectedRoute === 'Studios2' && <Studios2 />}
             {selectedRoute === 'Studios3' && <Studios3 />}
            
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home8