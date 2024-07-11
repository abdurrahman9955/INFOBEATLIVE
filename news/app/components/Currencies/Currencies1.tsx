'use Client'
import React from 'react'
import { useState } from 'react';
import Currencies6 from './Currencies6';
import Currencies7 from './Currencies7';
import Currencies8 from './Currencies8';
import Currencies9 from './Currencies9';


const Currencies1 = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Currencies6');
  
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

          <button onClick={() => setSelectedRoute('Currencies6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Currencies7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Currencies8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Currencies9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Currencies6' && <Currencies6 />}
             {selectedRoute === 'Currencies7' && <Currencies7 />}
             {selectedRoute === 'Currencies8' && <Currencies8 />}
             {selectedRoute === 'Currencies9' && <Currencies9 />}
           
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Currencies1