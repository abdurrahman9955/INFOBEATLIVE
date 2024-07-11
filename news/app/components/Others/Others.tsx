'use Client'
import React from 'react'
import { useState } from 'react';
import Others2 from './Others2';
import Others3 from './Others3';
import Others4 from './Others4';
import Others5 from './Others5';


const Others = () => {

  const [selectedRoute, setSelectedRoute] = useState<string>('Others2');

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

          <button onClick={() => setSelectedRoute('Others2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Others3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Others4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Others5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1  '>
           

             {selectedRoute === 'Others2' && <Others2 />}
             {selectedRoute === 'Others3' && <Others3 />}
             {selectedRoute === 'Others4' && <Others4 />}
             {selectedRoute === 'Others5' && <Others5 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Others