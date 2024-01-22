'use Client'
import React from 'react'
import { useState } from 'react';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
import Blog4 from './Blog4';

const Home14 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Blog1'
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

          <button onClick={() => setSelectedRoute('Blog1')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Blog2')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Shorts </button>

          <button onClick={() => setSelectedRoute('Blog3')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Blog4')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Blog1' && <Blog1 />}
             {selectedRoute === 'Blog2' && <Blog2 />}
             {selectedRoute === 'Blog3' && <Blog3 />}
             {selectedRoute === 'Blog4' && <Blog4 />}
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home14