'use Client'
import React from 'react'
import { useState } from 'react';
import HealthCare2 from './HealthCare2';
import HealthCare3 from './HealthCare3';
import HealthCare4 from './HealthCare4';
import HealthCare5 from './HealthCare5';

const HealthCare = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('HealthCare2');
  
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

          <button onClick={() => setSelectedRoute('HealthCare2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('HealthCare3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('HealthCare4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('HealthCare5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'HealthCare2' && <HealthCare2 />}
             {selectedRoute === 'HealthCare3' && <HealthCare3 />}
             {selectedRoute === 'HealthCare4' && <HealthCare4 />}
             {selectedRoute === 'HealthCare5' && <HealthCare5 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default HealthCare