'use Client'
import React from 'react'
import { useState } from 'react';
import Business3 from './Business3';
import Business4 from './Business4';
import Business5 from './Business5';
import Business2 from './Business2';

const Business = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Business2'
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

          <button onClick={() => setSelectedRoute('Business2')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Business3')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Business4')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Business5')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>
            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           
             
             {selectedRoute === 'Business2' && <Business2 />}
             {selectedRoute === 'Business3' && <Business3 />}
             {selectedRoute === 'Business4' && <Business4 />}
             {selectedRoute === 'Business5' && <Business5 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Business