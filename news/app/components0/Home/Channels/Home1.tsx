'use Client'
import React from 'react'
import { useState } from 'react';
import Channel1 from './Channel1';
import Channel2 from './Channel2';
import Channel3 from './Channel3';


const Home1 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Channel1'
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

          <button onClick={() => setSelectedRoute('Channel1')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Popular </button>

          <button onClick={() => setSelectedRoute('Channel2')}
           type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>Subscribers </button>

          <button onClick={() => setSelectedRoute('Channel3')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Others </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Channel1' && <Channel1 />}
             {selectedRoute === 'Channel2' && <Channel2 />}
             {selectedRoute === 'Channel3' && <Channel3 />}
             
           </div>

          
                  
         </div>
         </div>
         
    </div>
  )
}

export default Home1