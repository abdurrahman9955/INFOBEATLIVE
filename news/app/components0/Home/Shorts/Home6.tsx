'use Client'
import React from 'react'
import { useState } from 'react';
import Shorts1 from './Shorts1';
import Shorts2 from './Shorts2';
import Shorts3 from './Shorts3';


const Home6 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Shorts1');


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

          <button onClick={() => setSelectedRoute('Shorts1')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>Popular </button>

          <button onClick={() => setSelectedRoute('Shorts2')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Latest </button>

          <button onClick={() => setSelectedRoute('Shorts3')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Oldest </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Shorts1' && <Shorts1 />}
             {selectedRoute === 'Shorts2' && <Shorts2 />}
             {selectedRoute === 'Shorts3' && <Shorts3 />}
            
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home6