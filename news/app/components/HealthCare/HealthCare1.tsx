'use Client'
import React from 'react'
import { useState } from 'react';
import HealthCare6 from './HealthCare6';
import HealthCare7 from './HealthCare7';
import HealthCare8 from './HealthCare8';
import HealthCare9 from './HealthCare9';

const HealthCare1 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'HealthCare6'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);
  return (
   
   <div className='flex justify-center  font-bold 
   border-4 border-black  bg-lime-400'>
     
       <div className='flex flex-col  w-full m-2
        bg-white  border-4 
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
          bg-lime-400'> 

          <button onClick={() => setSelectedRoute('HealthCare6')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('HealthCare7')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('HealthCare8')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('HealthCare9')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'HealthCare6' && <HealthCare6 />}
             {selectedRoute === 'HealthCare7' && <HealthCare7 />}
             {selectedRoute === 'HealthCare8' && <HealthCare8 />}
             {selectedRoute === 'HealthCare9' && <HealthCare9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default HealthCare1