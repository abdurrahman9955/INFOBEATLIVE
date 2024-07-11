'use Client'
import React from 'react'
import { useState } from 'react';
import Videos1 from './Videos1';
import Videos2 from './Videos2';
import Videos3 from './Videos3';


const Home9 = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Videos1');


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

          <button onClick={() => setSelectedRoute('Videos1')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>Popular </button>

          <button onClick={() => setSelectedRoute('Videos2')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded hover:bg-gray-900'>Latest </button>

          <button onClick={() => setSelectedRoute('Videos3')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Oldest </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Videos1' && <Videos1 />}
             {selectedRoute === 'Videos2' && <Videos2 />}
             {selectedRoute === 'Videos3' && <Videos3 />}
            
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home9