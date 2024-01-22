'use Client'
import React from 'react'
import { useState } from 'react';
import Schools6 from './Schools6';
import Schools7 from './Schools7';
import Schools8 from './Schools8';
import Schools9 from './Schools9';


const Schools1 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Schools6'
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

          <button onClick={() => setSelectedRoute('Schools6')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Schools7')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Schools8')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Schools9')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Schools6' && <Schools6 />}
             {selectedRoute === 'Schools7' && <Schools7 />}
             {selectedRoute === 'Schools8' && <Schools8 />}
             {selectedRoute === 'Schools9' && <Schools9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Schools1