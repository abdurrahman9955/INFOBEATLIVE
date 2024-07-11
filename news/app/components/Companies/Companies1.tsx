'use Client'
import React from 'react'
import { useState } from 'react';
import Companies6 from './Companies6';
import Companies7 from './Companies7';
import Companies8 from './Companies8';
import Companies9 from './Companies9';

const Companies1 = () => {

  const [selectedRoute, setSelectedRoute] = useState<string>('Companies6');
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
          
          <button onClick={() => setSelectedRoute('Companies6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Companies7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Companies8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Companies9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Companies6' && <Companies6 />}
             {selectedRoute === 'Companies7' && <Companies7 />}
             {selectedRoute === 'Companies8' && <Companies8 />}
             {selectedRoute === 'Companies9' && <Companies9 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Companies1