'use Client'
import React from 'react'
import { useState } from 'react';
import Weather2 from './Weather2';
import Weather3 from './Weather3';
import Weather4 from './Weather4';
import Weather5 from './Weather5';



const Weather = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Weather2');

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

          <button onClick={() => setSelectedRoute('Weather2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Weather3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Weather4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Weather5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  px-1   '>
           

             {selectedRoute === 'Weather2' && <Weather2 />}
             {selectedRoute === 'Weather3' && <Weather3 />}
             {selectedRoute === 'Weather4' && <Weather4 />}
             {selectedRoute === 'Weather5' && <Weather5 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Weather