'use Client'
import React from 'react'
import { useState } from 'react';
import Peoples1 from './Peoples1';
import Peoples2 from './Peoples2';
import Peoples3 from './Peoples3';

const Home11 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Peoples1');


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

          <button onClick={() => setSelectedRoute('Peoples1')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>Popular </button>

          <button onClick={() => setSelectedRoute('Peoples2')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Friends </button>

          <button onClick={() => setSelectedRoute('Peoples3')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Others </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Peoples1' && <Peoples1 />}
             {selectedRoute === 'Peoples2' && <Peoples2 />}
             {selectedRoute === 'Peoples3' && <Peoples3 />}
            
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home11