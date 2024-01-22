'use Client'
import React from 'react'
import { useState } from 'react';
import Crypto6 from './Crypto6';
import Crypto7 from './Crypto7';
import Crypto8 from './Crypto8';
import Crypto9 from './Crypto9';

const Crypto1 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Crypto6'
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

         <button  onClick={() => setSelectedRoute('Crypto6')}
         type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button  onClick={() => setSelectedRoute('Crypto7')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button  onClick={() => setSelectedRoute('Crypto8')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button  onClick={() => setSelectedRoute('Crypto9')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

            
             {selectedRoute === 'Crypto6' && <Crypto6 />}
             {selectedRoute === 'Crypto7' && <Crypto7 />}
             {selectedRoute === 'Crypto8' && <Crypto8 />}
             {selectedRoute === 'Crypto9' && <Crypto9 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Crypto1