'use Client'
import React from 'react'
import { useState } from 'react';
import User2 from './User2';
import User3 from './User3';
import User4 from './User4';

const User1 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'User2'
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

          <button onClick={() => setSelectedRoute('User2')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Popular </button>

          <button onClick={() => setSelectedRoute('User3')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Friends </button>

          <button onClick={() => setSelectedRoute('User4')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Others </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           
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