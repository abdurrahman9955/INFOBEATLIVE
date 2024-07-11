'use Client'
import React from 'react'
import { useState } from 'react';
import Hospitals6 from './Hospitals6';
import Hospitals7 from './Hospitals7';
import Hospitals8 from './Hospitals8';
import Hospitals9 from './Hospitals9';


const Hospitals1 = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Hospitals6');

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

          <button onClick={() => setSelectedRoute('Hospitals6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Hospitals7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Hospitals8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Hospitals9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7 mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Hospitals6' && <Hospitals6 />}
             {selectedRoute === 'Hospitals7' && <Hospitals7 />}
             {selectedRoute === 'Hospitals8' && <Hospitals8 />}
             {selectedRoute === 'Hospitals9' && <Hospitals9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Hospitals1