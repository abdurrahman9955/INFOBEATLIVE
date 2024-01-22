'use Client'
import React from 'react'
import { useState } from 'react';
import Shorts1 from './Shorts1';
import Shorts2 from './Shorts2';
import Shorts3 from './Shorts3';


const Home6 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Shorts1'
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

          <button onClick={() => setSelectedRoute('Shorts1')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Popular </button>

          <button onClick={() => setSelectedRoute('Shorts2')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Latest </button>

          <button onClick={() => setSelectedRoute('Shorts3')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Oldest </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Shorts1' && <Shorts1 />}
             {selectedRoute === 'Shorts2' && <Shorts2 />}
             {selectedRoute === 'Shorts3' && <Shorts3 />}
            
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home6