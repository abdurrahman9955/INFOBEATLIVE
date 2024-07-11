'use Client'
import React from 'react'
import { useState } from 'react';
import Articles1 from './Articles1';
import Articles2 from './Articles2';
import Articles3 from './Articles3';

const Home0 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Articles1');


  return (
   
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-lime-400'>
     
       <div className='flex flex-col  w-full m-1
        bg-white  border-2
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
          font-bold  pb-1  bg-lime-400'> 

          <button onClick={() => setSelectedRoute('Articles1')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Popular </button>

          <button onClick={() => setSelectedRoute('Articles2')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>Latest </button>

          <button onClick={() => setSelectedRoute('Articles3')}
           type='button' className='text-white bg-lime-950 px-2
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Oldest </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Articles1' && <Articles1 />}
             {selectedRoute === 'Articles2' && <Articles2 />}
             {selectedRoute === 'Articles3' && <Articles3 />}
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home0