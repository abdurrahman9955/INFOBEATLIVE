'use Client'
import React from 'react'
import { useState } from 'react';
import Investing6 from './Investing6';
import Investing7 from './Investing7';
import Investing8 from './Investing8';
import Investing9 from './Investing9';


const Investing1 = () => {

  const [selectedRoute, setSelectedRoute] = useState<string>('Investing6');

  return (
  
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-lime-400'>
     
       <div className='flex flex-col  w-full m-1
        bg-white  border-2 
      border-black  h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
          font-bold  pb-1
          bg-lime-400'> 

          <button onClick={() => setSelectedRoute('Investing6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Investing7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Investing8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1
          rounded hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Investing9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'Investing6' && <Investing6 />}
             {selectedRoute === 'Investing7' && <Investing7 />}
             {selectedRoute === 'Investing8' && <Investing8 />}
             {selectedRoute === 'Investing9' && <Investing9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Investing1