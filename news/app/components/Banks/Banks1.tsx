'use Client'
import React from 'react'
import Banks6 from './Banks6'
import { useState } from 'react';
import Banks7 from './Banks7';
import Banks8 from './Banks8';
import Banks9 from './Banks9';

const Banks1 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Banks6'
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

         <button onClick={() => setSelectedRoute('Banks6')}
         type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Banks7')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Banks8')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Banks9')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Banks6' && <Banks6 />}
             {selectedRoute === 'Banks7' && <Banks7 />}
             {selectedRoute === 'Banks8' && <Banks8 />}
             {selectedRoute === 'Banks9' && <Banks9 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Banks1