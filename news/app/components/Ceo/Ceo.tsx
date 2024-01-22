'use Client'
import React from 'react'
import { useState } from 'react';
import Ceo2 from './Ceo2';
import Ceo3 from './Ceo3';
import Ceo4 from './Ceo4';
import Ceo5 from './Ceo5';

const Ceo = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Ceo2'
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

          <button onClick={() => setSelectedRoute('Ceo2')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Ceo3')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Ceo4')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Ceo5')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Ceo2' && <Ceo2 />}
             {selectedRoute === 'Ceo3' && <Ceo3 />}
             {selectedRoute === 'Ceo4' && <Ceo4 />}
             {selectedRoute === 'Ceo5' && <Ceo5 />}
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Ceo