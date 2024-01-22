'use Client'
import React from 'react'
import { useState } from 'react';
import Studios1 from './Studios1';
import Studios2 from './Studios2';
import Studios3 from './Studios3';


const Home8 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Studios1'
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

          <button onClick={() => setSelectedRoute('Studios1')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Popular </button>

          <button onClick={() => setSelectedRoute('Studios2')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Subscribed </button>

          <button onClick={() => setSelectedRoute('Studios3')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Others </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Studios1' && <Studios1 />}
             {selectedRoute === 'Studios2' && <Studios2 />}
             {selectedRoute === 'Studios3' && <Studios3 />}
            
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home8