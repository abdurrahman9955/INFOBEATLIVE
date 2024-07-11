'use Client'
import React from 'react'
import { useState } from 'react';
import Leadership6 from './Leadership6';
import Leadership7 from './Leadership7';
import Leadership8 from './Leadership8';
import Leadership9 from './Leadership9';


const Leadership1 = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Leadership6');

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

          <button onClick={() => setSelectedRoute('Leadership6')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7  mt-1
          rounded  hover:bg-gray-900'>Videos </button>

          <button onClick={() => setSelectedRoute('Leadership7')}
          type='button' className='text-white bg-lime-950 px-2
           w-auto h-7 mt-1
          rounded  hover:bg-gray-950'>shorts </button>

          <button onClick={() => setSelectedRoute('Leadership8')}
          type='button' className='text-white bg-lime-950 px-2 
          w-auto h-7  mt-1 
          rounded hover:bg-gray-900'>Articles </button>

          <button onClick={() => setSelectedRoute('Leadership9')}
          type='button' className='text-white bg-lime-950
           px-2 w-auto h-7  mt-1 
          rounded  hover:bg-gray-950'>books </button>

            
          </h1>
             <div className='h-auto overflow-y-auto  p-1  '>
           

             {selectedRoute === 'Leadership6' && <Leadership6 />}
             {selectedRoute === 'Leadership7' && <Leadership7 />}
             {selectedRoute === 'Leadership8' && <Leadership8 />}
             {selectedRoute === 'Leadership9' && <Leadership9 />}
             
            
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Leadership1