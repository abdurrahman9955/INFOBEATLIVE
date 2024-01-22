'use Client'
import React from 'react'
import { useState } from 'react';
import Economics2 from './Economics2';
import Economics3 from './Economics3';
import Economics4 from './Economics4';
import Economics5 from './Economics5';

const Economics = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Economics2'
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

          <button onClick={() => setSelectedRoute('Economics2')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Economics3')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Economics4')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Economics5')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Economics2' && <Economics2 />}
             {selectedRoute === 'Economics3' && <Economics3 />}
             {selectedRoute === 'Economics4' && <Economics4 />}
             {selectedRoute === 'Economics5' && <Economics5 />}
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Economics