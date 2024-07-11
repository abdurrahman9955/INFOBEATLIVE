'use Client'
import React from 'react'
import { useState } from 'react';
import Currencies2 from './Currencies2';
import Currencies3 from './Currencies3';
import Currencies4 from './Currencies4';
import Currencies5 from './Currencies5';


const Currencies = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Currencies2');
  
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

          <button   onClick={() => setSelectedRoute('Currencies2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Currencies3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Currencies4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Currencies5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Currencies2' && <Currencies2 />}
             {selectedRoute === 'Currencies3' && <Currencies3 />}
             {selectedRoute === 'Currencies4' && <Currencies4 />}
             {selectedRoute === 'Currencies5' && <Currencies5 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Currencies