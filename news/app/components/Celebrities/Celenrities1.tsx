'use Client'
import React from 'react'
import { useState } from 'react';
import Celebrities6 from './Celebrities6';
import Celebrities7 from './Celebrities7';
import Celebrities8 from './Celebrities8';
import Celebrities9 from './Celebrities9';


const Celebrities1 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Celebrities6'
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

          <button onClick={() => setSelectedRoute('Celebrities6')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Celebrities7')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Celebrities8')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Celebrities9')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Celebrities6' && <Celebrities6 />}
             {selectedRoute === 'Celebrities7' && <Celebrities7 />}
             {selectedRoute === 'Celebrities8' && <Celebrities8 />}
             {selectedRoute === 'Celebrities9' && <Celebrities9 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Celebrities1