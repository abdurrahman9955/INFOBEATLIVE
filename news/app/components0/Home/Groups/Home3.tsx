'use Client'
import React from 'react'
import { useState } from 'react';
import Group1 from './Group1';
import Group2 from './Group2';
import Group3 from './Group3';


const Home3 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Group1'
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

          <button onClick={() => setSelectedRoute('Group1')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Popular </button>

          <button onClick={() => setSelectedRoute('Group2')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Joined </button>

          <button onClick={() => setSelectedRoute('Group3')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Others </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Group1' && <Group1 />}
             {selectedRoute === 'Group2' && <Group2 />}
             {selectedRoute === 'Group3' && <Group3 />}
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home3