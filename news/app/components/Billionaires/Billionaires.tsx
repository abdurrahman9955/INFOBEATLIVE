'use Client'
import React from 'react'
import { useState } from 'react';
import Billionaire2 from './Billionaire2';
import Billionaire3 from './Billionaire3';
import Billionaire4 from './Billionaire4';
import Billionaire5 from './Billionaire5';


const Billionaires = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Billionaire2'
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

         <button onClick={() => setSelectedRoute('Billionaire2')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Billionaire3')}
            type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Billionaire4')}
           type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Billionaire5')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Billionaire2' && <Billionaire2 />}
             {selectedRoute === 'Billionaire3' && <Billionaire3 />}
             {selectedRoute === 'Billionaire4' && <Billionaire4 />}
             {selectedRoute === 'Billionaire5' && <Billionaire5 />}
             
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Billionaires