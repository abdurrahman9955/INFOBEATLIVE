'use Client'
import React from 'react'
import { useState } from 'react';
import Billionaire6 from './Billionaire6';
import Billionaire7 from './Billionaire7';
import Billionaire8 from './Billionaire8';
import Billionaire9 from './Billionaire9';


const Billionaires1 = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Billionaire6'
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

          <button onClick={() => setSelectedRoute('Billionaire6')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Billionaire7')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Billionaire8')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Billionaire9')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>
            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'Billionaire6' && <Billionaire6 />}
             {selectedRoute === 'Billionaire7' && <Billionaire7 />}
             {selectedRoute === 'Billionaire8' && <Billionaire8 />}
             {selectedRoute === 'Billionaire9' && <Billionaire9 />}
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Billionaires1