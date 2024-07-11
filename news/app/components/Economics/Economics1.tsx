'use Client'
import React from 'react'
import { useState } from 'react';
import Economics6 from './Economics6';
import Economics7 from './Economics7';
import Economics8 from './Economics8';
import Economics9 from './Economics9';

const Economics1 = () => {

  const [selectedRoute, setSelectedRoute] = useState<string>('Economics6');

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

          <button onClick={() => setSelectedRoute('Economics6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Economics7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Economics8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Economics9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7 mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Economics6' && <Economics6 />}
             {selectedRoute === 'Economics7' && <Economics7 />}
             {selectedRoute === 'Economics8' && <Economics8 />}
             {selectedRoute === 'Economics9' && <Economics9 />}
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Economics1