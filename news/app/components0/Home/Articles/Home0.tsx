'use Client'
import React from 'react'
import { useState } from 'react';
import Articles1 from './Articles1';
import Articles2 from './Articles2';
import Articles3 from './Articles3';

const Home0 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Articles1'
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

          <button onClick={() => setSelectedRoute('Articles1')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Popular </button>

          <button onClick={() => setSelectedRoute('Articles2')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Latest </button>

          <button onClick={() => setSelectedRoute('Articles3')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Oldest </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Articles1' && <Articles1 />}
             {selectedRoute === 'Articles2' && <Articles2 />}
             {selectedRoute === 'Articles3' && <Articles3 />}
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home0