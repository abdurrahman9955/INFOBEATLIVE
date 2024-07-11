'use Client'
import React from 'react'
import { useState } from 'react';
import Money2 from './Money2';
import Money3 from './Money3';
import Money4 from './Money4';
import Money5 from './Money5';


const Money = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Money2');

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

          <button onClick={() => setSelectedRoute('Money2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Money3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7 mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Money4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Money5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           
            
             {selectedRoute === 'Money2' && <Money2 />}
             {selectedRoute === 'Money3' && <Money3 />}
             {selectedRoute === 'Money4' && <Money4 />}
             {selectedRoute === 'Money5' && <Money5 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Money