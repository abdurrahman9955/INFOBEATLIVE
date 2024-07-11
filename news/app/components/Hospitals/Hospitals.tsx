'use Client'
import React from 'react'
import { useState } from 'react';
import Hospitals2 from './Hospitals2';
import Hospitals3 from './Hospitals3';
import Hospitals4 from './Hospitals4';
import Hospitals5 from './Hospitals5';


const Hospitals = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Hospitals2');
  
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

          <button onClick={() => setSelectedRoute('Hospitals2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Hospitals3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Hospitals4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7 mt-1
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Hospitals5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Hospitals2' && <Hospitals2 />}
             {selectedRoute === 'Hospitals3' && <Hospitals3 />}
             {selectedRoute === 'Hospitals4' && <Hospitals4 />}
             {selectedRoute === 'Hospitals5' && <Hospitals5 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Hospitals