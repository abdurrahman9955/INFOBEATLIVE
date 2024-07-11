'use Client'
import React from 'react'
import { useState } from 'react';
import Motivation2 from './Motivation2';
import Motivation3 from './Motivation3';
import Motivation4 from './Motivation4';
import Motivation5 from './Motivation5';


const Motivation = () => {

  const [selectedRoute, setSelectedRoute] = useState<string>('Motivation2');

  return (
  
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-lime-400'>
     
       <div className='flex flex-col  w-full m-1
        bg-white  border-2 
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black 
           text-xs font-bold  pb-1
          bg-lime-400'> 

          <button onClick={() => setSelectedRoute('Motivation2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Motivation3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Motivation4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Motivation5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Motivation2' && <Motivation2 />}
             {selectedRoute === 'Motivation3' && <Motivation3 />}
             {selectedRoute === 'Motivation4' && <Motivation4 />}
             {selectedRoute === 'Motivation5' && <Motivation5 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Motivation