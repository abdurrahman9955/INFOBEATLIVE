'use Client'
import React from 'react'
import { useState } from 'react';
import Crypto2 from './Crypto2';
import Crypto3 from './Crypto3';
import Crypto4 from './Crypto4';
import Crypto5 from './Crypto5';

const Crypto = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Crypto2');
 
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

          <button  onClick={() => setSelectedRoute('Crypto2')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button  onClick={() => setSelectedRoute('Crypto3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button  onClick={() => setSelectedRoute('Crypto4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button  onClick={() => setSelectedRoute('Crypto5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1  '>
           

            
             {selectedRoute === 'Crypto2' && <Crypto2 />}
             {selectedRoute === 'Crypto3' && <Crypto3 />}
             {selectedRoute === 'Crypto4' && <Crypto4 />}
             {selectedRoute === 'Crypto5' && <Crypto5 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Crypto