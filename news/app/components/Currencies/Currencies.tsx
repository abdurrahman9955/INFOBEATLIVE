'use Client'
import React from 'react'
import { useState } from 'react';
import Currencies2 from './Currencies2';
import Currencies3 from './Currencies3';
import Currencies4 from './Currencies4';
import Currencies5 from './Currencies5';


const Currencies = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Currencies2'
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

          <button   onClick={() => setSelectedRoute('Currencies2')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Currencies3')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Currencies4')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Currencies5')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Currencies2' && <Currencies2 />}
             {selectedRoute === 'Currencies3' && <Currencies3 />}
             {selectedRoute === 'Currencies4' && <Currencies4 />}
             {selectedRoute === 'Currencies5' && <Currencies5 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Currencies