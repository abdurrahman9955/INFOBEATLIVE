'use Client'
import React from 'react'
import { useState } from 'react';
import Currencies6 from './Currencies6';
import Currencies7 from './Currencies7';
import Currencies8 from './Currencies8';
import Currencies9 from './Currencies9';


const Currencies1 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Currencies6'
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

          <button onClick={() => setSelectedRoute('Currencies6')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Currencies7')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Currencies8')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Currencies9')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Currencies6' && <Currencies6 />}
             {selectedRoute === 'Currencies7' && <Currencies7 />}
             {selectedRoute === 'Currencies8' && <Currencies8 />}
             {selectedRoute === 'Currencies9' && <Currencies9 />}
           
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Currencies1