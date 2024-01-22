'use Client'
import React from 'react'
import { useState } from 'react';
import Countries6 from './Countries6';
import Countries7 from './Countries7';
import Countries8 from './Countries8';
import Countries9 from './Countries9';


const Countries1 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Countries6'
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

         <button onClick={() => setSelectedRoute('Countries6')}
         type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Countries7')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Countries8')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Countries9')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

            {selectedRoute === 'Countries6' && <Countries6 />}
             {selectedRoute === 'Countries7' && <Countries7 />}
             {selectedRoute === 'Countries8' && <Countries8 />}
             {selectedRoute === 'Countries9' && <Countries9 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Countries1