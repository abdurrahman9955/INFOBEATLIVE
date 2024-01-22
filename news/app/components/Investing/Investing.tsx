'use Client'
import React from 'react'
import { useState } from 'react';
import Investing2 from './Investing2';
import Investing3 from './Investing3';
import Investing4 from './Investing4';
import Investing5 from './Investing5';


const Investing = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Investing2'
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

          <button onClick={() => setSelectedRoute('Investing2')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Investing3')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Investing4')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Investing5')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Investing2' && <Investing2 />}
             {selectedRoute === 'Investing3' && <Investing3 />}
             {selectedRoute === 'Investing4' && <Investing4 />}
             {selectedRoute === 'Investing5' && <Investing5 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Investing