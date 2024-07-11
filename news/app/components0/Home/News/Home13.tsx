'use Client'
import React from 'react'
import { useState } from 'react';
import News1 from './News1';
import News2 from './News2';
import News3 from './News3';
import News4 from './News4';

const Home13 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('News1');

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

          <button onClick={() => setSelectedRoute('News1')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('News2')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>Shorts </button>

          <button onClick={() => setSelectedRoute('News3')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('News4')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'News1' && <News1 />}
             {selectedRoute === 'News2' && <News2 />}
             {selectedRoute === 'News3' && <News3 />}
             {selectedRoute === 'News4' && <News4 />}
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home13