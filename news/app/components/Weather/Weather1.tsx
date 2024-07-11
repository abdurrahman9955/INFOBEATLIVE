'use Client'
import React from 'react'
import { useState } from 'react';
import Weather6 from './Weather6';
import Weather7 from './Weather7';
import Weather8 from './Weather8';
import Weather9 from './Weather9';



const Weather1 = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Weather6');

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

          <button onClick={() => setSelectedRoute('Weather6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Weather7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Weather8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Weather9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Weather6' && <Weather6 />}
             {selectedRoute === 'Weather7' && <Weather7 />}
             {selectedRoute === 'Weather8' && <Weather8 />}
             {selectedRoute === 'Weather9' && <Weather9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Weather1