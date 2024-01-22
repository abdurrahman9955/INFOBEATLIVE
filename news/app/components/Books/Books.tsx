'use Client'
import React from 'react'
import Books2 from './Books2'
import { useState } from 'react';
import Books3 from './Books3';
import Books4 from './Books4';
import Books5 from './Books5';

const Books = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Books2'
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

        <button onClick={() => setSelectedRoute('Books2')}
        type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Books3')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Books4')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Books5')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Books2' && <Books2 />}
             {selectedRoute === 'Books3' && <Books3 />}
             {selectedRoute === 'Books4' && <Books4 />}
             {selectedRoute === 'Books5' && <Books5 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Books