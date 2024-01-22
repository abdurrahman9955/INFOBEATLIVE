'use Client'
import React from 'react'
import { useState } from 'react';
import Rich2 from './Rich2';
import Rich3 from './Rich3';
import Rich4 from './Rich4';
import Rich5 from './Rich5';


const Rich = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Rich2'
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

          <button onClick={() => setSelectedRoute('Rich2')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Rich3')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Rich4')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Rich5')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Rich2' && <Rich2 />}
             {selectedRoute === 'Rich3' && <Rich3 />}
             {selectedRoute === 'Rich4' && <Rich4 />}
             {selectedRoute === 'Rich5' && <Rich5 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Rich