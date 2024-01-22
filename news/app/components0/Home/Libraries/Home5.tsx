'use Client'
import React from 'react'
import { useState } from 'react';
import Library1 from './Library1';
import Library2 from './Library2';
import Library3 from './Library3';

const Home5 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Library1'
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

          <button onClick={() => setSelectedRoute('Library1')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Popular </button>

          <button onClick={() => setSelectedRoute('Library2')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Subscribed </button>

          <button onClick={() => setSelectedRoute('Library3')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Others </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Library1' && <Library1 />}
             {selectedRoute === 'Library2' && <Library2 />}
             {selectedRoute === 'Library3' && <Library3 />}
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home5