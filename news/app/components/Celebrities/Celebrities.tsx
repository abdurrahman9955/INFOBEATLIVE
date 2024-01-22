'use Client'
import React from 'react'
import { useState } from 'react';
import Celebrities2 from './Celebrities2';
import Celebrities3 from './Celebrities3';
import Celebrities4 from './Celebrities4';
import Celebrities5 from './Celebrities5';


const Celebrities = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Celebrities2'
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

         <button onClick={() => setSelectedRoute('Celebrities2')}
         type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Celebrities3')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Celebrities4')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Celebrities5')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Celebrities2' && <Celebrities2 />}
             {selectedRoute === 'Celebrities3' && <Celebrities3 />}
             {selectedRoute === 'Celebrities4' && <Celebrities4 />}
             {selectedRoute === 'Celebrities5' && <Celebrities5 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Celebrities