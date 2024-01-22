'use Client'
import React from 'react'
import { useState } from 'react';
import Ceo6 from './Ceo6';
import Ceo7 from './Ceo7';
import Ceo8 from './Ceo8';
import Ceo9 from './Ceo9';

const Ceo1 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Ceo6'
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

           <button onClick={() => setSelectedRoute('Ceo6')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Ceo7')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Ceo8')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Ceo9')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Ceo6' && <Ceo6 />}
             {selectedRoute === 'Ceo7' && <Ceo7 />}
             {selectedRoute === 'Ceo8' && <Ceo8 />}
             {selectedRoute === 'Ceo9' && <Ceo9 />}
            
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Ceo1