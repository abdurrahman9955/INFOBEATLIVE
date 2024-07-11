'use Client'
import React from 'react'
import { useState } from 'react';
import SocialMedia2 from './SocialMedia2';
import SocialMedia3 from './SocialMedia3';
import SocialMedia4 from './SocialMedia4';
import SocialMedia5 from './SocialMedia5';



const SocialMedia = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('SocialMedia2');
 
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

          <button onClick={() => setSelectedRoute('SocialMedia2')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('SocialMedia3')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('SocialMedia4')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('SocialMedia5')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7 mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

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