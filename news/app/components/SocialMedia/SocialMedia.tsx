'use Client'
import React from 'react'
import { useState } from 'react';
import SocialMedia2 from './SocialMedia2';
import SocialMedia3 from './SocialMedia3';
import SocialMedia4 from './SocialMedia4';
import SocialMedia5 from './SocialMedia5';



const SocialMedia = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'SocialMedia2'
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

          <button onClick={() => setSelectedRoute('SocialMedia2')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('SocialMedia3')}
          type='button' className='text-white bg-lime-950 p-2
           w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('SocialMedia4')}
          type='button' className='text-white bg-lime-950 p-2 
          w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('SocialMedia5')}
          type='button' className='text-white bg-lime-950
           p-2 w-auto h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-2   '>
           

             {selectedRoute === 'SocialMedia2' && <SocialMedia2 />}
             {selectedRoute === 'SocialMedia3' && <SocialMedia3 />}
             {selectedRoute === 'SocialMedia4' && <SocialMedia4 />}
             {selectedRoute === 'SocialMedia5' && <SocialMedia5 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default SocialMedia