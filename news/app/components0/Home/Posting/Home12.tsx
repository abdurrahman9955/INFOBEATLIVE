'use Client'
import React from 'react'
import { useState } from 'react';
import Posting1 from './Posting1';
import Posting2 from './Posting2';
import Posting3 from './Posting3';

const Home12 = () => {

  const [selectedRoute, setSelectedRoute] = useState<string>('Posting1');


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

          <button onClick={() => setSelectedRoute('Posting1')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>Popular </button>

          <button onClick={() => setSelectedRoute('Posting2')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Friends </button>

          <button onClick={() => setSelectedRoute('Posting3')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Others </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Posting1' && <Posting1 />}
             {selectedRoute === 'Posting2' && <Posting2 />}
             {selectedRoute === 'Posting3' && <Posting3 />}
            
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home12