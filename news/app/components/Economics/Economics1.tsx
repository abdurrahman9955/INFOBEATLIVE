'use Client'
import React from 'react'
import { useState } from 'react';
import Economics6 from './Economics6';
import Economics7 from './Economics7';
import Economics8 from './Economics8';
import Economics9 from './Economics9';

const Economics1 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Economics6'
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

          <button onClick={() => setSelectedRoute('Economics6')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Economics7')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Economics8')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Economics9')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

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