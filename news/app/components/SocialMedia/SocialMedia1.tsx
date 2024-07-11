'use Client'
import React from 'react'
import { useState } from 'react';
import SocialMedia6 from './SocialMedia6';
import SocialMedia7 from './SocialMedia7';
import SocialMedia8 from './SocialMedia8';
import SocialMedia9 from './SocialMedia9';



const SocialMedia1 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('SocialMedia6');

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

          <button onClick={() => setSelectedRoute('SocialMedia6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('SocialMedia7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('SocialMedia8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded  hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('SocialMedia9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1   '>
           

             {selectedRoute === 'SocialMedia6' && <SocialMedia6 />}
             {selectedRoute === 'SocialMedia7' && <SocialMedia7 />}
             {selectedRoute === 'SocialMedia8' && <SocialMedia8 />}
             {selectedRoute === 'SocialMedia9' && <SocialMedia9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default SocialMedia1