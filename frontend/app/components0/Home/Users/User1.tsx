'use Client'
import React from 'react'
import { useState } from 'react';
import User2 from './User2';
import User3 from './User3';
import User4 from './User4';

const User1 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('User2');


  return (
   
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-lime-400'>
     
       <div className='flex flex-col  w-full m-1
        bg-white  border-2 
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-sm 
          font-bold  pb-1
          bg-lime-400'> 

          <button onClick={() => setSelectedRoute('User2')}
           type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>Popular </button>

          <button onClick={() => setSelectedRoute('User3')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Friends </button>

          <button onClick={() => setSelectedRoute('User4')}
           type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Others </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           
             {selectedRoute === 'User2' && <User2 />}
             {selectedRoute === 'User3' && <User3 />}
             {selectedRoute === 'User4' && <User4 />}
            
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default User1