'use Client'
import React from 'react'
import { useState } from 'react';
import Companies2 from './Companies2';
import Companies3 from './Companies3';
import Companies4 from './Companies4';
import Companies5 from './Companies5';

const Companies = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>('Companies2');
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

          <button onClick={() => setSelectedRoute('Companies2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Companies3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Companies4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Companies5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Companies2' && <Companies2 />}
             {selectedRoute === 'Companies3' && <Companies3 />}
             {selectedRoute === 'Companies4' && <Companies4 />}
             {selectedRoute === 'Companies5' && <Companies5 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Companies