'use Client'
import React from 'react'
import { useState } from 'react';
import Live1 from './Live1';
import Live2 from './Live2';
import Live3 from './Live3';

const Home10 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Live1'
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

          <button onClick={() => setSelectedRoute('Live1')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Popular </button>

          <button onClick={() => setSelectedRoute('Live2')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Latest </button>

          <button onClick={() => setSelectedRoute('Live3')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Oldest </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Live1' && <Live1 />}
             {selectedRoute === 'Live2' && <Live2 />}
             {selectedRoute === 'Live3' && <Live3 />}
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home10